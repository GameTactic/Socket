import { HealthController } from './HealthController';
import { DebugController } from './DebugController';
import { IS_PRODUCTION } from '../util/secrets';

export default [
    IS_PRODUCTION ? HealthController : DebugController
];
