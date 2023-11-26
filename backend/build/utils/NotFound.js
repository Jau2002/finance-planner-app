"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NotFound extends Error {
    constructor(message, statusCode = 404) {
        super(message);
        this.statusCode = statusCode;
    }
}
exports.default = NotFound;
