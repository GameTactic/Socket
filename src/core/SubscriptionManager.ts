/**
 *
 * GameTactic Socket 2020 — NOTICE OF LICENSE
 * This source file is released under GPLv3 license by copyright holders.
 * Please see LICENSE file for more specific licensing terms.
 * @copyright 2019-2020 (c) GameTactic
 * @author Niko Granö <niko@granö.fi>
 *
 */
import { Socket } from 'socket.io';
import {_onEvent} from './Decorators';
import { Server } from 'socket.io';
import Subscribers from '../config/Subscribers';
import Subscription from './Subscription';

export class SubscriptionManager {
    private readonly socket: Socket;
    constructor(socket: Socket, io: Server) {
        // eslint-disable-next-line
        const subs: object = Subscribers; // This is used to load subscribers into the memory.
        this.socket = socket;
        // I will be checking first if there is any event to run on socket connect.
        if (_onEvent.connection !== undefined) {
            _onEvent.connection.forEach((item: { new (): Subscription }) => {
                (new item).on(io);
            });
        }

        // Now I will check what events I have to run.
        const events: Array<string> = Object.keys(_onEvent);
        events.forEach((event: string) => {
            // Here going to skip `connection` event as we dont want run it twice.
            if (event === 'connection') {
                _onEvent[event].forEach((item: { new (): Subscription }) => {
                    (new item()).on(io);
                });
            }
        });
    }
}
