import { ApplicationError } from "@core/error.core";
import { IUser } from "@interfaces/index"
import { userModel } from "@schemas/index"

export const createUserData = async (user: IUser): Promise<IUser> => {
    try {
        return await userModel.create(user);
    } catch (error: any) {
        throw new ApplicationError(500, error.message, "save user");
    }
}

export const getUserByField = async (rows: Partial<IUser>): Promise<IUser> => {
    try {
        const userFounded = await userModel.findOne(rows);
        if (!userFounded) throw new Error('User not founded');
        return userFounded;
    } catch (error: any) {
        throw new ApplicationError(500, error.message, "find User");
    }
}

