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
import socket, { ServerOptions } from 'socket.io';
import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';
import './core/Bootstrap';
import SubscriptionManager from './core/SubscriptionManager';
import AutoRouter from './core/AutoRouter';
import JwtAuthentication from './socket/middleware/JwtAuthentication';
import * as JsonParser from 'socket.io-json-parser';

// Express configuration
const app = createExpressServer({controllers: (new AutoRouter()).getControllers()});
const server = new http.Server(app);
const socketOptions = { parser: JsonParser } as ServerOptions;
const io = socket(server, socketOptions);

// Configure servers
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore This is some retarded reason... Typing is correct, but @types is wrong.
server.listen(process.env.PORT || 3000, process.env.HOST || 'localhost');
app.set('port', process.env.PORT || 3000);
app.set('host', process.env.HOST || 'localhost');
app.use(compression());

// Sockets
io.use((socket, next) => (new JwtAuthentication()).register(socket, next));
io.on('connection', (socket) => new SubscriptionManager(socket, io));

console.log('Server is running at http://%s:%d in %s mode', app.get('host'), app.get('port'), app.get('env'));
console.log('Press CTRL-C to stop\n');
