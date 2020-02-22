/**
 *
 * GameTactic Socket 2020 — NOTICE OF LICENSE
 * This source file is released under GPLv3 license by copyright holders.
 * Please see LICENSE file for more specific licensing terms.
 * @copyright 2019-2020 (c) GameTactic
 * @author Niko Granö <niko@granö.fi>
 *
 */
import Subscription from '../../core/Subscription';
import { OnEvent } from '../../core/Decorators';
import AuthDoc from '../route/AuthDoc';
import { autoInjectable } from 'tsyringe';
import Logger from '../../util/Logger';

@OnEvent((new AuthDoc).event)
@autoInjectable()
export default class Auth implements Subscription {
    private readonly log: Logger;

    constructor(private logger?: Logger) {
        this.log = logger;
    }

    public on(): string | void {
        this.log.debug('Got new authentication request.');
        return;
    }
}
