/**
 *
 * GameTactic Socket 2020 — NOTICE OF LICENSE
 * This source file is released under GPLv3 license by copyright holders.
 * Please see LICENSE file for more specific licensing terms.
 * @copyright 2019-2020 (c) GameTactic
 * @author Niko Granö <niko@granö.fi>
 *
 */
import SocketRoute from '../../core/SocketRoute';

export default class Auth implements SocketRoute {
    title = 'Authentication';
    description = 'Authenticate user with JWT to the socket server.';
    event = 'auth';
    payload: { jwt: string } = { jwt: 'JWT from authentication microservice' };
}
