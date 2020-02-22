/**
 *
 * GameTactic Socket 2020 — NOTICE OF LICENSE
 * This source file is released under GPLv3 license by copyright holders.
 * Please see LICENSE file for more specific licensing terms.
 * @copyright 2019-2020 (c) GameTactic
 * @author Niko Granö <niko@granö.fi>
 *
 */

import winston, {LogCallback} from 'winston';
import {autoInjectable, singleton,} from 'tsyringe';
import Configuration from './Configuration';
import * as Transport from 'winston-transport';

@autoInjectable()
@singleton()
export default class Logger {
    private readonly logger: winston.Logger;
    constructor(private config?: Configuration) {

        const transport: Array<Transport> = [
            new winston.transports.Console(config.isProduction() ? {level: 'error'} : {level: 'error'})
        ];
        if (!config.isProduction()) {
            transport.push(new winston.transports.File({ filename: 'debug.log', level: 'debug' }));
        }

        this.logger = winston.createLogger({transports: transport});
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public debug(message: string, meta?: any, callback?: LogCallback): void {
        this.logger.debug(message, meta, callback);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public info(message: string, meta?: any, callback?: LogCallback): void {
        this.logger.info(message, meta, callback);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public notice(message: string, meta?: any, callback?: LogCallback): void {
        this.logger.notice(message, meta, callback);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public warning(message: string, meta?: any, callback?: LogCallback): void {
        this.logger.warning(message, meta, callback);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public critical(message: string, meta?: any, callback?: LogCallback): void {
        this.logger.crit(message, meta, callback);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public emergency(message: string, meta?: any, callback?: LogCallback): void {
        this.logger.emerg(message, meta, callback);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public error(message: string, meta?: any, callback?: LogCallback): void {
        this.logger.error(message, meta, callback);
    }
}



