/**
 *
 * GameTactic Socket 2020 — NOTICE OF LICENSE
 * This source file is released under GPLv3 license by copyright holders.
 * Please see LICENSE file for more specific licensing terms.
 * @copyright 2019-2020 (c) GameTactic
 * @author Niko Granö <niko@granö.fi>
 *
 */

export const _onEvent: { [name: string]: Array<Function> } = {};
export function OnEvent(event: string): (constructor: Function) => void {
    return function (constructor: Function) {
        if (_onEvent[event] === undefined) {
            _onEvent[event] = [];
        }
        _onEvent[event].push(constructor);
        constructor.prototype._onEvent = event;
    };
}
