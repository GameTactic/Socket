/**
 *
 * GameTactic Socket 2020 — NOTICE OF LICENSE
 * This source file is released under GPLv3 license by copyright holders.
 * Please see LICENSE file for more specific licensing terms.
 * @copyright 2019-2020 (c) GameTactic
 * @author Niko Granö <niko@granö.fi>
 *
 */

// Please return here paths, which should be autoload.
export default [
    __dirname + '/../controllers',  // Controllers for Http
    __dirname + '/../socket/event', // Event Subscribers for Socket.IO
    __dirname + '/../socket/event/log', // Event Subscribers for Socket.IO
    __dirname + '/../socket/route', // Documentation for Socket.IO
];
