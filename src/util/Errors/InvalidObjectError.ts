export default class InvalidObjectError extends Error {
    constructor() {
        super('The object is not valid.\nMay be invalid due to missing required properties.');
    }
}