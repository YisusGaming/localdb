import fs from 'fs';

import { IObject } from './models/Object.js';
import { storePath } from './configs.js';

export function Write(object : IObject) {
    const rawStore = fs.readFileSync(storePath, { encoding: 'utf-8' });
    const store = JSON.parse(rawStore) as Array<IObject>;

    store.push(object);
    fs.writeFileSync(storePath, JSON.stringify(store, null, 4), { encoding: 'utf-8' });
}