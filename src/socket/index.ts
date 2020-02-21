/**
 *
 * GameTactic Socket 2020 — NOTICE OF LICENSE
 * This source file is released under GPLv3 license by copyright holders.
 * Please see LICENSE file for more specific licensing terms.
 * @copyright 2019-2020 (c) GameTactic
 * @author Niko Granö <niko@granö.fi>
 *
 */
import Auth from './Auth';
import Route from './Route';

const routes: Array<Route> = [ new Auth ];
const classes: { [key: string]: Route } = {};
routes.forEach((route: Route) => {
    classes[route.event] = route;
});
export default classes;
