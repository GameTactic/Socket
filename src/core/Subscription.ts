/**
 *
 * GameTactic Socket 2020 — NOTICE OF LICENSE
 * This source file is released under GPLv3 license by copyright holders.
 * Please see LICENSE file for more specific licensing terms.
 * @copyright 2019-2020 (c) GameTactic
 * @author Niko Granö <niko@granö.fi>
 *
 */

import { Server, Socket } from 'socket.io';

export interface SubscriptionData {
    io: Server;
    socket: Socket;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: Array<any>;
}

export default interface Subscription {
    on(data: SubscriptionData): string|void;
    // eslint-disable-next-line
}
