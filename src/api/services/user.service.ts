import { createUserData, getUserByField } from "@data/user.data";
import { IUser } from "@interfaces/user.interface";
import { createAuthToken } from "@utils/token.util";


export const createUserService = async (user: IUser) => await createUserData(user);

export const loginUserService = async (email: string, firebaseId: string) => {
    const userFounded = await getUserByField({ email, firebaseId });
    const token = await createAuthToken({ userId: userFounded._id });
    return { userFounded, token };
}
