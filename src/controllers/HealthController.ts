/**
 *
 * GameTactic Socket 2020 — NOTICE OF LICENSE
 * This source file is released under GPLv3 license by copyright holders.
 * Please see LICENSE file for more specific licensing terms.
 * @copyright 2019-2020 (c) GameTactic
 * @author Niko Granö <niko@granö.fi>
 *
 */

import {Get, JsonController} from 'routing-controllers';
import {RegisteredController} from '../core/Decorators';

@JsonController()
@RegisteredController('production')
export class HealthController {
    @Get('/')
    public healthAction(): object {
        return { health: true };
    }
}
