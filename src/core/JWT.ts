/**
 *
 * GameTactic Socket 2020 — NOTICE OF LICENSE
 * This source file is released under GPLv3 license by copyright holders.
 * Please see LICENSE file for more specific licensing terms.
 * @copyright 2019-2020 (c) GameTactic
 * @author Niko Granö <niko@granö.fi>
 *
 */

// Possible regions in the JWT token.
export enum JWTRegion {
    EU = 'eu',
    NA = 'na',
    RU = 'ru',
    SA = 'sa',
}

export default interface JWT {
    iss: string; // Who issued it. Example: GameTactic.
    aud: string; // For what. Example: GameTactic.
    jti: string; // UUID. Identifier of user.
    iat: number; // JWT is not valid before this date. Unix datetime.
    exp: number; // JWT is not valid after this date. Unix datetime.
    username: string; // Viewable user identifier. Might not be unique.
    region: JWTRegion; // Region where user is located. See enum.
    // eslint-disable-next-line
}
