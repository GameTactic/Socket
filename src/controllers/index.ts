/**
 *
 * GameTactic Socket 2020 — NOTICE OF LICENSE
 * This source file is released under GPLv3 license by copyright holders.
 * Please see LICENSE file for more specific licensing terms.
 * @copyright 2019-2020 (c) GameTactic
 * @author Niko Granö <niko@granö.fi>
 *
 */

import { HealthController } from './HealthController';
import { DebugController } from './DebugController';
import { IS_PRODUCTION } from '../util/secrets';
import { DocsController } from './DocsController';

export default [
    IS_PRODUCTION ? HealthController : DebugController,
    DocsController,
];
