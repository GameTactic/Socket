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
import logger from '../../util/logger';

@OnEvent((new AuthDoc).event)
export default class Auth extends Subscription {
    public on(): string | void {
        logger.debug('Got new authentication request.');
        return;
    }
}
