const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const { once } = require('node:events');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const test = require('node:test');
const WebSocket = require('ws');

const { ensureExecutable, normalizeShell, startServer } = require('../src/server.js');

async function stop(server) {
    await new Promise((resolve, reject) => {
        server.close((error) => error ? reject(error) : resolve());
    });
}

test('server listens on loopback by default', async (t) => {
    const server = startServer();
    t.after(() => stop(server));

    await once(server, 'listening');
    assert.equal(server.address().address, '127.0.0.1');
});

test('network mode listens on every IPv4 interface', async (t) => {
    const server = startServer({ network: true });
    t.after(() => stop(server));

    await once(server, 'listening');
    assert.equal(server.address().address, '0.0.0.0');
});

test('normalizes a macOS login shell name', () => {
    assert.equal(normalizeShell('-zsh'), 'zsh');
    assert.equal(normalizeShell('/bin/zsh'), '/bin/zsh');
});

test('makes the node-pty helper executable', (t) => {
    const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'sheh-'));
    const helperPath = path.join(directory, 'spawn-helper');
    fs.writeFileSync(helperPath, 'helper', { mode: 0o600 });
    t.after(() => fs.rmSync(directory, { recursive: true, force: true }));

    ensureExecutable(helperPath);
    assert.notEqual(fs.statSync(helperPath).mode & 0o111, 0);
});

test('websocket starts a terminal session', async (t) => {
    const server = startServer();
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

test('CLI documents the explicit network option', () => {
    const result = spawnSync(process.execPath, [path.join(__dirname, '..', 'main.js'), '--help'], {
        encoding: 'utf8'
    });

    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /--network\s+Expose the server to the local network/);
});
