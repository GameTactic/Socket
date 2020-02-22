/**
 *
 * GameTactic Socket 2020 — NOTICE OF LICENSE
 * This source file is released under GPLv3 license by copyright holders.
 * Please see LICENSE file for more specific licensing terms.
 * @copyright 2019-2020 (c) GameTactic
 * @author Niko Granö <niko@granö.fi>
 *
 */

import Loader from '../config/Loader';
import * as path from 'path';
import * as fs from 'fs';

for (let i=0; i < Loader.length; i++) {
    const modulePath = Loader[i];
    const importPath: string = '../' + modulePath.split('../')[1]+'/';
    let files: Array<string> = fs.readdirSync(path.resolve(modulePath));
    for (let f=0; f < files.length; f++) {
        files[f] = files[f].split('.')[0];
    }
    files = [...new Set(files)]; // Remove duplications.

    for (let p=0; p < files.length; p++) {
        require(importPath+files[p]);
    }
}
