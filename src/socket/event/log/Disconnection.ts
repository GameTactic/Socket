/**
 *
 * GameTactic Socket 2020 — NOTICE OF LICENSE
 * This source file is released under GPLv3 license by copyright holders.
 * Please see LICENSE file for more specific licensing terms.
 * @copyright 2019-2020 (c) GameTactic
 * @author Niko Granö <niko@granö.fi>
 *
 */
import Subscription, {SubscriptionData} from '../../../core/Subscription';
import { OnEvent } from '../../../core/Decorators';
import { autoInjectable } from 'tsyringe';
import Logger from '../../../util/Logger';

@OnEvent('disconnect')
@autoInjectable()
export default class Disconnection implements Subscription {
    private readonly log: Logger;
    constructor(private logger?: Logger) {
        this.log = logger;
    }

    public on(data: SubscriptionData): string | void {
        this.log.debug('Client '+data.socket.client.id+' has disconnected.');
        return;
    }
}
