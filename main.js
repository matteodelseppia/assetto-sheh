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
*/

const fs = require('fs');
const path = require('path');
const manager = require('./src/child.js');
const { getShell } = require('./src/server.js');
const { Command } = require('commander');

const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8'));

const program = new Command();

function setTerminalTitle(title) {
    // OSC 2 is understood by terminal emulators, including xterm.js.
    process.stdout.write(`\x1b]2;${title}\x07`);
}

program
    .command('help [command]')
    .description('Display help for a command')
    .action((command) => {
        if (command === 'server') {
            console.log('Usage: sheh server --child [number] [--network]');
        } else if (command === 'shell') {
            console.log('Usage: sheh shell');
        } else {
            program.help();
        }
    });

program
  .command('version')
  .description('Display the current version')
  .action(() => {
    console.log(pkg.version);
  });

program
    .name('sheh')
    .version(pkg.version, '-v, --version')
    .addHelpText('after');

program
    .command('shell')
    .description('Print the detected shell')
    .action(() => {
        console.log(getShell());
    });

program
    .command('server')
    .description('Start the sheh server (localhost only by default)')
    .option('--child <number>', 'Number of child processes', '1')
    .option('--network', 'Expose the server to the local network')
    .action((options) => {
        const count = parseInt(options.child) || 1;
        manager.start(count, options.network);
    });

program
    .option('--network', 'Expose the server to the local network')
    .option('--title <title>', 'Set the browser terminal tab title')
    .action((options) => {
        if (options.title !== undefined) {
            setTerminalTitle(options.title);
            return;
        }

        manager.start(1, options.network);
    });

program.showSuggestionAfterError(true);
program.showHelpAfterError(true);

program.parse(process.argv);
