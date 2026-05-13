const path = require('path');
const { startServer } = require('./server.js');

function start(count) {
    const instances = parseInt(count) || 1;

    for (let i = 0; i < instances; i++) {
        startServer();
    }
}

module.exports = { start };
