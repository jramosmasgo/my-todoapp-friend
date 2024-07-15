"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const response_core_1 = __importDefault(require("@core/response.core"));
const ErrorMiddleware = (err, _req, res, _next) => {
    var _a;
    new response_core_1.default({
        code: (_a = err.statusCode) !== null && _a !== void 0 ? _a : 500,
        message: err.message,
        ok: false,
        action: err.action,
    }).sendResponse(res);
};
exports.default = ErrorMiddleware;
