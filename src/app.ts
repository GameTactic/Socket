import compression from 'compression';
import http from 'http';
import socket from 'socket.io';
import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';
import controllers from './controllers';

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
io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});

console.log('App is running at http://%s:%d in %s mode', app.get('host'), app.get('port'), app.get('env'));
console.log('Press CTRL-C to stop\n');
