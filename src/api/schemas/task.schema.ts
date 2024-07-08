import { ITask } from "@interfaces/index";
import mongoose, { mongo, Mongoose, Schema, Types } from "mongoose";

const taskSchema = new Schema<ITask>({
    userId: {
        type: Types.ObjectId,
        required: true,
        ref: 'Users'
    },
    title: {
        type: String,
        required: true
    },
    details: {
        type: String,
    },
    startDate: {
        type: Date,
        required: true
    },
    duration: {
        type: Date,
        required: true
    },
    level: {
        type: Number,
        required: true
    },
    location: {
        type: String
    },
    alert: {
        type: Boolean,
        default: false
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    repeatType: {
        type: String,
        required: true
    },
    repeatWeekDays: {
        type: String,
    },
    alertVoice: {
        type: Boolean,
        required: true,
        default: false,
    },
    readDetails: {
        type: Boolean,
        default: false
    }
});

export const taskModel = mongoose.model<ITask>("Tasks", taskSchema);