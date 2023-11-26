"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BadRequest = (res, message) => res.status(400).json({
    error: true,
    message,
});
exports.default = BadRequest;
