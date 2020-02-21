/**
 *
 * GameTactic Socket 2020 — NOTICE OF LICENSE
 * This source file is released under GPLv3 license by copyright holders.
 * Please see LICENSE file for more specific licensing terms.
 * @copyright 2019-2020 (c) GameTactic
 * @author Niko Granö <niko@granö.fi>
 *
 */

import compression from 'compression';
import http from 'http';
import socket from 'socket.io';
import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';
import controllers from './controllers';
import { Socket } from 'socket.io';
import { SubscriptionManager } from './core/SubscriptionManager';

// Express configuration
const app = createExpressServer({controllers: controllers});
const server = new http.Server(app);
const io = socket(server);

// Configure servers
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore This is some retarded reason... Typing is correct, but @types is wrong.
server.listen(process.env.PORT || 3000, process.env.HOST || 'localhost');
app.set('port', process.env.PORT || 3000);
app.set('host', process.env.HOST || 'localhost');
app.use(compression());

// Sockets
io.on('connection', function(socket: Socket) {
    new SubscriptionManager(socket, io);
});

console.log('App is running at http://%s:%d in %s mode', app.get('host'), app.get('port'), app.get('env'));
console.log('Press CTRL-C to stop\n');
