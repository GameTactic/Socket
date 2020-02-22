/**
 *
 * GameTactic Socket 2020 — NOTICE OF LICENSE
 * This source file is released under GPLv3 license by copyright holders.
 * Please see LICENSE file for more specific licensing terms.
 * @copyright 2019-2020 (c) GameTactic
 * @author Niko Granö <niko@granö.fi>
 *
 */

import dotenv from 'dotenv';
import fs from 'fs';

export default class Configuration {
    constructor() {
        if (fs.existsSync('.env')) {
            dotenv.config({ path: '.env' });
        } else {
            dotenv.config({ path: '.env.example' });  // you can delete this after you create your own .env file!
        }
    }

    public environment(): string {
        return process.env.NODE_ENV;
    }

    public isProduction(): boolean {
        return this.environment() === 'production';
    }
}
