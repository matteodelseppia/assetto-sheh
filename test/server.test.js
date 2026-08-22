const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const { once } = require('node:events');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const test = require('node:test');
const WebSocket = require('ws');

const { ensureExecutable, getShell, normalizeShell, openBrowser, startServer } = require('../src/server.js');

function startTestServer(options = {}) {
    return startServer({ openBrowser: false, ...options });
}

async function stop(server) {
    await new Promise((resolve, reject) => {
        server.close((error) => error ? reject(error) : resolve());
    });
}

test('server listens on loopback by default', async (t) => {
    const server = startTestServer();
    t.after(() => stop(server));

    await once(server, 'listening');
    assert.equal(server.address().address, '127.0.0.1');
});

test('network mode listens on every IPv4 interface', async (t) => {
    const server = startTestServer({ network: true });
    t.after(() => stop(server));

    await once(server, 'listening');
    assert.equal(server.address().address, '0.0.0.0');
});

test('server opens its local URL by default', async (t) => {
    const openedUrls = [];
    const server = startServer({ browserOpener: (url) => openedUrls.push(url) });
    t.after(() => stop(server));

    await once(server, 'listening');
    assert.deepEqual(openedUrls, [`http://localhost:${server.address().port}`]);
});

test('normalizes a macOS login shell name', () => {
    assert.equal(normalizeShell('-zsh'), 'zsh');
    assert.equal(normalizeShell('/bin/zsh'), '/bin/zsh');
});

test('opens the default browser on supported CI platforms', () => {
    const url = 'http://localhost:48982';
    const platforms = [
        ['darwin', 'open', [url]],
        ['linux', 'xdg-open', [url]],
        ['win32', 'cmd.exe', ['/c', 'start', '', url]]
    ];

    for (const [platform, command, args] of platforms) {
        const calls = [];
        const browser = {
            on: () => browser,
            unref: () => calls.push('unref')
        };
        const opened = openBrowser(url, {
            platform,
            spawnProcess: (actualCommand, actualArgs, options) => {
                calls.push([actualCommand, actualArgs, options]);
                return browser;
            }
        });

        assert.equal(opened, true);
        assert.deepEqual(calls, [[command, args, { detached: true, stdio: 'ignore' }], 'unref']);
    }
});

test('does not launch a browser on unsupported platforms', () => {
    assert.equal(openBrowser('http://localhost:48982', {
        platform: 'freebsd',
        spawnProcess: () => assert.fail('Browser launcher should not be called')
    }), false);
});

test('makes the Unix node-pty helper executable', { skip: process.platform === 'win32' }, (t) => {
    const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'sheh-'));
    const helperPath = path.join(directory, 'spawn-helper');
    fs.writeFileSync(helperPath, 'helper', { mode: 0o600 });
    t.after(() => fs.rmSync(directory, { recursive: true, force: true }));

    ensureExecutable(helperPath);
    assert.notEqual(fs.statSync(helperPath).mode & 0o111, 0);
});

test('websocket starts a terminal session', async (t) => {
    const server = startTestServer();
    await once(server, 'listening');

    const { port } = server.address();
    const websocket = new WebSocket(`ws://127.0.0.1:${port}`);
    t.after(async () => {
        websocket.terminate();
        await stop(server);
    });
    await once(websocket, 'open');

    let closed = false;
    websocket.on('close', () => {
        closed = true;
    });
    await new Promise((resolve) => setTimeout(resolve, 100));

    assert.equal(closed, false, 'Terminal websocket closed immediately');
    assert.equal(websocket.readyState, WebSocket.OPEN);
});

test('PowerShell accepts terminal commands on Windows', { skip: process.platform !== 'win32' }, async (t) => {
    const server = startTestServer();
    await once(server, 'listening');

    const { port } = server.address();
    const websocket = new WebSocket(`ws://127.0.0.1:${port}`);
    t.after(async () => {
        websocket.terminate();
        await stop(server);
    });
    await once(websocket, 'open');

    const marker = '__SHEH_POWERSHELL_TEST__';
    const output = await new Promise((resolve, reject) => {
        let terminalOutput = '';
        const timeout = setTimeout(() => reject(new Error('PowerShell did not return test output')), 5000);
        websocket.on('message', (data) => {
            terminalOutput += data.toString();
            if (terminalOutput.includes(marker)) {
                clearTimeout(timeout);
                resolve(terminalOutput);
            }
        });
        websocket.on('close', (code) => {
            clearTimeout(timeout);
            reject(new Error(`PowerShell websocket closed with code ${code}`));
        });
        websocket.send(`Write-Output ${marker}\r`);
    });

    assert.match(output, new RegExp(marker));
});

test('CLI documents the explicit network option', () => {
    const result = spawnSync(process.execPath, [path.join(__dirname, '..', 'main.js'), '--help'], {
        encoding: 'utf8'
    });

    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /--network\s+Expose the server to the local network/);
});

test('CLI emits an OSC title sequence', () => {
    const result = spawnSync(process.execPath, [path.join(__dirname, '..', 'main.js'), '--title', 'my-title'], {
        encoding: 'utf8'
    });

    assert.equal(result.status, 0, result.stderr);
    assert.equal(result.stdout, '\x1b]2;my-title\x07');
});

test('terminal sessions receive title changes', { skip: process.platform === 'win32' }, async (t) => {
    const server = startTestServer();
    await once(server, 'listening');

    const { port } = server.address();
    const websocket = new WebSocket(`ws://127.0.0.1:${port}`);
    t.after(async () => {
        websocket.terminate();
        await stop(server);
    });
    await once(websocket, 'open');
    await new Promise((resolve) => setTimeout(resolve, 100));

    const title = 'browser-title';
    const titleSequence = `\x1b]2;${title}\x07`;
    const executable = JSON.stringify(process.execPath);
    const script = JSON.stringify(path.join(__dirname, '..', 'main.js'));
    const command = path.basename(getShell()) === 'node'
        ? `require('node:child_process').execFileSync(${executable}, [${script}, '--title', '${title}'], { stdio: 'inherit' })\r`
        : `${executable} ${script} --title ${title}\r`;
    const output = await new Promise((resolve, reject) => {
        let terminalOutput = '';
        const timeout = setTimeout(() => reject(new Error('Terminal did not receive the title sequence')), 5000);
        websocket.on('message', (data) => {
            terminalOutput += data.toString();
            if (terminalOutput.includes(titleSequence)) {
                clearTimeout(timeout);
                resolve(terminalOutput);
            }
        });
        websocket.send(command);
    });

    assert.match(output, new RegExp(titleSequence));
});
