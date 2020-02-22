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
import {_autoSocketDocRoute, RegisteredController} from '../core/Decorators';
import SocketDoc from '../core/SocketDoc';

@JsonController()
@RegisteredController()
export class DocsController {
    @Get('/doc')
    public indexAction(): object {
        const docBlocks = _autoSocketDocRoute as Array<{ new (): SocketDoc }>;
        const $return: { [key: string]: SocketDoc } = {};
        for (let i=0; i < docBlocks.length; i++) {
            const block: SocketDoc = new docBlocks[i]();
            $return[block.event] = block;
        }

        return $return;
    }
}
