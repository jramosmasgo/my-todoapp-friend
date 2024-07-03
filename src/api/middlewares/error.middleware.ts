import { Response, Request, NextFunction } from "express";
import ResponseApi from "@core/response.core";

const ErrorMiddleware = (
    err: any,
    _req: Request,
    res: Response,
    _next: NextFunction
) => {
    console.log("Error:", err);
    new ResponseApi({
        code: err.statusCode ?? 500,
        message: err.message,
        ok: false,
        action: err.action,
    }).sendResponse(res);
};

export default ErrorMiddleware;