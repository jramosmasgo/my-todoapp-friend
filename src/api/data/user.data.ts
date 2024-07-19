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

export const getUserByFieldData = async (rows: Partial<IUser>): Promise<IUser> => {
    try {
        const userFounded = await userModel.findOne(rows);
        if (!userFounded) throw new Error('User not founded');
        return userFounded;
    } catch (error: any) {
        throw new ApplicationError(500, error.message, "find User");
    }
}

export const updateUserData = async (idUser: string, rows: Partial<IUser>): Promise<IUser> => {
    try {
        const userFounded = await userModel.findById(idUser);
        if (!userFounded) throw new Error('User not founded');

        const userUpdate = await userModel.findByIdAndUpdate(idUser, rows, { new: true });

        if (!userUpdate) throw new Error('Error on update User');

        return userUpdate;
    } catch (error: any) {
        throw new ApplicationError(500, error.message, "find User");
    }
}

