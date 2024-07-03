import { IUser } from "@interfaces/index";
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    firebaseId: {
        type: String,
        required: true
    },
    profileImage: {
        type: String
    },
    phone: {
        type: String
    }
}, {
    timestamps: true
})

export const userModel = mongoose.model<IUser>("Users", userSchema);