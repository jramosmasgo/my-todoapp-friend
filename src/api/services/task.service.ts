import { createTaskData, getTaskByFieldData, getTasksByFieldData, updateTasksData } from "@data/index";
import { ITask } from "@interfaces/index";
import moment from "moment";

export const createTaskService = async (task: ITask) => await createTaskData(task);

export const updateTaskByIdService = async (taskId: string, rows: Partial<ITask>) => await updateTasksData(taskId, rows);

export const getTasksByUserIdService = async (userId: string) => await getTasksByFieldData({ userId });

export const getTaskByIdService = async (id: string) => await getTaskByFieldData({ _id: id });

export const getTaskByUserService = async (userId: string) =>
    await getTasksByFieldData({ userId, active: true })

export const getTasksByDateService = async (userId: string, date: Date) => {
    const dateSelected: Date = new Date(moment(date).toDate());
    const nextDayString = new Date(moment(date).add(1, 'day').toDate());
    const dayOfWeek = moment(dateSelected).day();

    const tasksNoRepetitive = await getTasksByFieldData({ startDate: { $gte: dateSelected, $lte: nextDayString }, userId, active: true, repeatType: "once" });
    const tasksByDay = await getTasksByFieldData({ startDate: { $lte: nextDayString }, userId, active: true, repeatType: "diary" });
    const tasksByWeek = await getTasksByFieldData({
        userId,
        active: true,
        repeatType: 'weekly',
        $expr: {
            $eq: [{ $dayOfWeek: "$startDate" }, dayOfWeek + 1]
        }
    });

    return [...tasksNoRepetitive, ...tasksByDay, ...tasksByWeek];
}