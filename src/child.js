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

const path = require('path');
const { startServer } = require('./server.js');

function start(count, network = false) {
    const instances = parseInt(count) || 1;

    for (let i = 0; i < instances; i++) {
        startServer({ network });
    }
}

module.exports = { start };
