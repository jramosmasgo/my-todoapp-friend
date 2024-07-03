export interface ITask {
    title: string;
    details: string;
    startDate: Date;
    duration: Date;
    level: number;
    location: number[];
    active: boolean;
    repeat: boolean;
    repeatType: string;
    repeatWeekDays: string
    alertVoice: boolean;
    readDetails: boolean;
}