/**
 *
 * GameTactic Socket 2020 — NOTICE OF LICENSE
 * This source file is released under GPLv3 license by copyright holders.
 * Please see LICENSE file for more specific licensing terms.
 * @copyright 2019-2020 (c) GameTactic
 * @author Niko Granö <niko@granö.fi>
 *
 */
import {_autoRoute} from './Decorators';
import {autoInjectable} from 'tsyringe';
import Configuration from '../util/Configuration';

@autoInjectable()
export default class AutoRouter {
    private readonly controllers: Array<{controller: Function; option: string}>;

    constructor(private config?: Configuration) {
        this.controllers = _autoRoute;
    }

    public getControllers(): Array<Function> {
        const $return: Array<Function> = [];
        this.controllers.forEach((item) => {
            switch (item.option) {
                case 'debug':
                    if (!this.config.isProduction()) {
                        $return.push(item.controller);
                    }
                    break;
                case 'production':
                    if (this.config.isProduction()) {
                        $return.push(item.controller);
                    }
                    break;
                default:
                    $return.push(item.controller);
            }
        });

        return $return;
    }
}
