import { createTaskData, getTaskByFieldData, getTasksByFieldData, updateTasksData } from "@data/index";
import { ITask } from "@interfaces/index";

export const createTaskService = async (task: ITask) => await createTaskData(task);

export const updateTaskByIdService = async (taskId: string, rows: Partial<ITask>) => await updateTasksData(taskId, rows);

export const getTasksByUserIdService = async (userId: string) => await getTasksByFieldData({ userId });

export const getTaskByIdService = async (id: string) => await getTaskByFieldData({ _id: id });

export const getTaskByUserService = async (userId: string, date: Date) =>
    await getTasksByFieldData({ userId, active: true, startDate: { $gte: `${new Date(date)}` } })

