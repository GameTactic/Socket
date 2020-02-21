/**
 *
 * GameTactic Socket 2020 — NOTICE OF LICENSE
 * This source file is released under GPLv3 license by copyright holders.
 * Please see LICENSE file for more specific licensing terms.
 * @copyright 2019-2020 (c) GameTactic
 * @author Niko Granö <niko@granö.fi>
 *
 */

import winston from 'winston';

const options: winston.LoggerOptions = {
    transports: [
        new winston.transports.Console({
            level: process.env.NODE_ENV === 'production' ? 'error' : 'debug'
        }),
        new winston.transports.File({ filename: 'debug.log', level: 'debug' })
    ]
};

const logger = winston.createLogger(options);

if (process.env.NODE_ENV !== 'production') {
    logger.debug('Logging initialized at debug level');
}

export default logger;
