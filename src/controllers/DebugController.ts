/**
 *
 * GameTactic Socket 2020 — NOTICE OF LICENSE
 * This source file is released under GPLv3 license by copyright holders.
 * Please see LICENSE file for more specific licensing terms.
 * @copyright 2019-2020 (c) GameTactic
 * @author Niko Granö <niko@granö.fi>
 *
 */

import {Controller, Get, Render} from 'routing-controllers';
import {RegisteredController} from '../core/Decorators';

@Controller()
@RegisteredController('debug')
export class DebugController {
    @Get('/')
    @Render('index.twig')
    public debugAction(): string {
        return ;
    }
}
