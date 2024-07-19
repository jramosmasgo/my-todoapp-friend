import { createUserData, getUserByFieldData, updateUserData } from "@data/user.data";
import { IUser } from "@interfaces/user.interface";
import { createAuthToken } from "@utils/token.util";


export const createUserService = async (user: IUser) => await createUserData(user);

export const loginUserService = async (email: string, firebaseId: string) => {
    const userFounded = await getUserByFieldData({ email, firebaseId });
    const token = await createAuthToken({ userId: userFounded._id });
    return { userFounded, token };
}

export const updateUserService = async (idUser: string, rows: Partial<IUser>) => await updateUserData(idUser, rows);