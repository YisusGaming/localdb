import fs from 'fs';

import { IObject } from './models/Object.js';
import { storePath } from './configs.js';

export function Write(properties: Object, includeTimeStamps?: boolean) {
    const rawStore = fs.readFileSync(storePath, { encoding: 'utf-8' });
    const store = JSON.parse(rawStore) as Array<IObject>;

    const object : IObject = {
        _id: nextId(),
        ...properties
    }
    if (includeTimeStamps) object.createdAt = Date.now().toString();
    store.push(object);
    fs.writeFileSync(storePath, JSON.stringify(store, null, 4), { encoding: 'utf-8' });
}

/**
 * Returns the next id avaliable
 */
function nextId() : number {
    const rawStore = fs.readFileSync(storePath, { encoding: 'utf-8' });
    const store = JSON.parse(rawStore) as Array<IObject>;

    let ids : Array<number> = [];
    store.forEach((object) => {
        ids.push(object._id);
    });

    ids.sort((a, b) => a - b); // Sort in a way that the bigger id is the last element of the array.
    return ids.pop()! + 1 || 0; // Return the last element of the array (bigger id) + 1. Or return 0 if the array is empty.
}