import fs from 'fs';

import { IObject } from './models/Object.js';
import { storePath } from './configs.js';

/**
 * Writes an object to the store.
 * @param {Object} properties A **javascript object** with all the custom properties.
 * @param {boolean} [includeTimeStamps] Should the object have a createdAt property?
 * @returns {number} The obeject's store id.
 */
export function Write(properties: Object, includeTimeStamps?: boolean) : number {
    const rawStore = fs.readFileSync(storePath, { encoding: 'utf-8' });
    const store = JSON.parse(rawStore) as Array<IObject>;

    const object : IObject = {
        _id: nextId(),
        ...properties
    }
    if (includeTimeStamps) object.createdAt = Date.now().toString();
    store.push(object);
    fs.writeFileSync(storePath, JSON.stringify(store, null, 4), { encoding: 'utf-8' });

    return object._id;
}

/**
 * Find's an object based on it's id.
 * @param {number} id
 * @returns {IObject?}
 */
export function FindById(id: number) : IObject | undefined {
    const rawStore = fs.readFileSync(storePath, { encoding: 'utf-8' });
    const store = JSON.parse(rawStore) as Array<IObject>;

    for (let i = 0; i < store.length; i++) {
        const object = store[i];
        if (object._id == id) return object;
    }
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