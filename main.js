#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const manager = require('./src/child.js');
const { getShell } = require('./src/server.js');
const { Command } = require('commander');

const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8'));

const program = new Command();

program
    .command('help [command]')
    .description('Display help for a command')
    .action((command) => {
        if (command === 'server') {
            console.log('Usage: sheh server --child [number]');
        } else if (command === 'shell') {
            console.log('Usage: sheh shell');
        } else {
            program.help();
        }
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
    .description('Start the sheh server')
    .option('--child <number>', 'Number of child processes', '1')
    .action((options) => {
        const count = parseInt(options.child) || 1;
        manager.start(count);
    });

program.action(() => {
    manager.start(1);
});

program.showSuggestionAfterError(true);
program.showHelpAfterError(true);

program.parse(process.argv);
