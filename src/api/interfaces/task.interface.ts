import mongoose, { Types } from "mongoose";

export interface ITask {
    _id?: string;
    userId: string | ObjectIdMongoose;
    title: string;
    details?: string;
    startDate: Date;
    durationMinutes: number;
    level: number;
    location?: string;
    alert: boolean;
    active: boolean;
    repeatType: string;
    repeatWeekDays?: string
    alertVoice: boolean;
    readDetails: boolean;
}

export type ObjectIdMongoose = {
    _id: Types.ObjectId;
};