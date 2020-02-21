/**
 *
 * GameTactic Socket 2020 — NOTICE OF LICENSE
 * This source file is released under GPLv3 license by copyright holders.
 * Please see LICENSE file for more specific licensing terms.
 * @copyright 2019-2020 (c) GameTactic
 * @author Niko Granö <niko@granö.fi>
 *
 */

import SocketRoute from './SocketRoute';
import Routes from '../config/Routes';

const routes: Array<SocketRoute> = Routes;
const classes: { [key: string]: SocketRoute } = {};
routes.forEach((route: SocketRoute) => {
    classes[route.event] = route;
});
export default classes;
