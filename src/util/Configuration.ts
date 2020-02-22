/**
 *
 * GameTactic Socket 2020 — NOTICE OF LICENSE
 * This source file is released under GPLv3 license by copyright holders.
 * Please see LICENSE file for more specific licensing terms.
 * @copyright 2019-2020 (c) GameTactic
 * @author Niko Granö <niko@granö.fi>
 *
 */

import dotenv, {DotenvConfigOutput} from 'dotenv';
import fs from 'fs';
import request from 'sync-request';

export default class Configuration {
    private readonly jwt: string;
    private readonly dotEnv: DotenvConfigOutput;

    constructor() {
        this.dotEnv = dotenv.config(fs.existsSync('.env') ? { path:'.env'} : { path:'.env.example'});
        this.jwt = JSON.parse(request('GET', this.dotEnv.parsed['AUTH_MICROSERVICE']).body.toString()).publicKey;
    }

    public environment(): string {
        return process.env.NODE_ENV;
    }

    public isProduction(): boolean {
        return this.environment() === 'production';
    }

    public getJWTPublicKey(): string {
        return this.jwt;
    }
}
