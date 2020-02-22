/**
 *
 * GameTactic Socket 2020 — NOTICE OF LICENSE
 * This source file is released under GPLv3 license by copyright holders.
 * Please see LICENSE file for more specific licensing terms.
 * @copyright 2019-2020 (c) GameTactic
 * @author Niko Granö <niko@granö.fi>
 *
 */
import {autoInjectable} from 'tsyringe';
import Logger from '../../util/Logger';
import MiddlewareInterface from './MiddlewareInterface';
import { Socket } from 'socket.io';
import { verify } from 'jsonwebtoken';
import Configuration from '../../util/Configuration';
import JWT from '../../core/JWT';

// These are not used anywhere else than in this default export class.
class TokenNotDefined implements Error {
    public message = 'Please specify `Authorization` token in the query';
    public name = 'TokenNotDefined';
}

@autoInjectable()
export default class JwtAuthentication implements MiddlewareInterface {
    private readonly log: Logger;
    private readonly config: Configuration;
    constructor(private logger?: Logger, private configuration?: Configuration) {
        this.log = logger;
        this.config = configuration;
    }

    public register(socket: Socket, next: (err?: { data: Error }) => void): void {
        // This function body describes the authentication Saga.
        try {
            this.loadToken(socket);       // First we load token into memory.
            this.verifyToken();           // Second we try verify the JWT.
            this.exportToSession(socket); // Exports data from the JWT into Socket.IO session.
            next();                       // Continue execution without error.
        } catch (e) {
            // If there was error thrown, reject new connection and return error.
            this.log.debug(`Client ${socket.client.id} authentication failed: ${e.message}.`);
            next({data: e});
        }
    }

    // JWT Related properties.
    private token: string;
    private JWT: JWT;

    // Logic bellow this.
    private loadToken(socket: Socket): void {
        this.token = socket.handshake.query.Authorization;
        if (this.token === undefined) {
            throw new TokenNotDefined();
        }
    }

    private verifyToken(): void {
        this.JWT = verify(this.token, this.configuration.getJWTPublicKey()) as JWT;
    }

    private exportToSession(socket: Socket): void {
        socket.request.user = this.JWT;
    }
}
