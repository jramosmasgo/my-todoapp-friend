import ResponseApi from "@core/response.core";
import { IUser } from "@interfaces/index";
import { createUserService, loginUserService } from "@services/user.service";
import { Response, NextFunction, Request } from "express";

export const createUserController = async (req: Request<{}, {}, IUser>, res: Response, next: NextFunction) => {
    try {
        const userCreated = await createUserService(req.body);
        new ResponseApi<IUser>({ data: userCreated, action: "save user", code: 200 }).sendResponse(res);
    } catch (error) {
        next(error)
    }
}

export const loginUserController = async (req: Request<{}, {}, { email: string, firebaseId: string }>, res: Response, next: NextFunction) => {
    try {
        const { userFounded, token } = await loginUserService(req.body.email, req.body.firebaseId);
        new ResponseApi<{ userFounded: IUser, token: string }>({ data: { userFounded, token }, action: "login user" }).sendResponse(res);
    } catch (error) {
        next(error)
    }
}