"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_core_1 = require("@core/error.core");
const token_util_1 = require("@utils/token.util");
const tokenValidation = (req, _res, next) => {
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            return next(new error_core_1.ApplicationError(401, "No token provided", "Token Error"));
        }
        const { userId } = (0, token_util_1.validateToken)(authorization.replace("Bearer ", ""));
        if (!userId)
            return next(new error_core_1.ApplicationError(401, "Invalid token", "Unauthorized"));
        return next();
    }
    catch (error) {
        if (error.message === "jwt expired")
            return next(new error_core_1.ApplicationError(401, error.message, "Unauthorized"));
        return next(error);
    }
};
exports.default = tokenValidation;
