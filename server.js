#!/usr/bin/env node

/*
* Sheh. Use the terminal through the browser locally.
* Copyright (C) 2026  waxodium
*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with this program.  If not, see <https://www.gnu.org/licenses/>.
*
*
*
*
*
*/


const express = require('express');
const http = require('http')
const nodepty = require('node-pty')
const { WebSocketServer } = require('ws')
const path = require('path')
const os = require('os')

const webapp = express()
const server = http.createServer(webapp);
webapp.use(express.static(path.join(__dirname, 'public')));
webapp.use('/lib', express.static(path.join(__dirname, 'lib')));

    
function getShell() {
    if (process.env.SHELL) return process.env.SHELL;

    if (process.platform === 'win32') {
        return 'powershell.exe'
    };

    return '/bin/sh'
}


const webSocketServe = new WebSocketServer({ server })

webSocketServe.on('connection', (websocket) => {


    const shellPath = getShell();
    const shell = nodepty.spawn(shellPath, [], {
        name: 'xterm-256color',
        cols: 80,
        rows: 24,
        cwd: os.homedir(),
        env: process.env
    });

    shell.onData((data) => {
        if (websocket.readyState === websocket.OPEN) {
            websocket.send(data);
        }
    })

    websocket.on('message', (message) => {
        const data = message.toString()

        if (data.startsWith('{"type":"resize"')) {
            try {
                 const { cols, rows } = JSON.parse(data);
                shell.resize(cols, rows)
            } catch (err) {
                console.error(err);
            }
            return;
        }

        shell.write(data)
    });

    websocket.on('close', () => {
        shell.kill();
    });
});


server.listen(8080, '0.0.0.0', () => {
    const Networkdetail = Object.values(os.networkInterfaces()).flat();
    const network = Networkdetail.find(details => details.family === 'IPv4' && details.internal === false);

    let address
    if (network) {
        address = network.address
    }

    const coralGreen = '\x1b[38;5;167m'
    const lowerGreen = '\x1b[38;2;180;210;170m'
    const dimWhite = '\x1b[2m'
    const reset = '\x1b[0m'
    const bold = '\x1b[1m'

    console.log(`\n${bold}Shell Exposed HTTP${reset}`); 
    console.log(`${dimWhite}Status:\x1b[1m\x1b[32m Online ${reset}`);
    console.log(`${dimWhite}Port:${coralGreen} 8080${reset}`);
    
    console.log(`\n${lowerGreen}Local:${reset}   http://localhost:${coralGreen}8080${reset}`);
    console.log(`${lowerGreen}Network:${reset} http://${address}:${coralGreen}8080${reset}`);
    
});
