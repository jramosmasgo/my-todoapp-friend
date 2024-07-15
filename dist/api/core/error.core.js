"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationError = void 0;
class ApplicationError extends Error {
    constructor(statusCode, message, action) {
        super(message);
        this.statusCode = statusCode;
        this.action = action;
    }
}
exports.ApplicationError = ApplicationError;
