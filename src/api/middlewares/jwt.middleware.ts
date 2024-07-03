import { ApplicationError } from "@core/error.core";
import { NextFunction, Request, Response } from "express";
import { validateToken } from "@utils/token.util";

const tokenValidation = (req: Request, _res: Response, next: NextFunction) => {
    try {
        const { authorization } = req.headers;

        if (!authorization) {
            return next(
                new ApplicationError(401, "No token provided", "Token Error")
            );
        }

        const { userId } = validateToken(authorization.replace("Bearer ", ""));

        if (!userId)
            return next(new ApplicationError(401, "Invalid token", "Unauthorized"));

        return next();
    } catch (error: any) {
        if (error.message === "jwt expired")
            return next(new ApplicationError(401, error.message, "Unauthorized"));
        return next(error);
    }
};

export default tokenValidation;