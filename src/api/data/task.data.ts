import { ApplicationError } from "@core/error.core";
import { ITask } from "@interfaces/index";
import { taskModel } from "@schemas/index";

export const createTaskData = async (task: ITask): Promise<ITask> => {
    try {
        return await taskModel.create(task);
    } catch (error: any) {
        throw new ApplicationError(500, error.message, "save task");
    }
}

export const updateTasksData = async (taskId: string, rows: Partial<ITask>): Promise<ITask> => {
    try {
        const result = await taskModel.findByIdAndUpdate(taskId, rows, { new: true });
        if (!result) throw new Error("task not found");
        return result;
    } catch (error: any) {
        throw new ApplicationError(500, error.message, "save task");
    }
}

export const getTasksByFieldData = async (rows: Object): Promise<ITask[]> => {
    try {
        const results = await taskModel.find(rows);
        if (!results) throw new Error("tasks not found");
        return results;
    } catch (error: any) {
        throw new ApplicationError(500, error.message, "find tasks");
    }
}

export const getTaskByFieldData = async (rows: Partial<ITask>) => {
    try {
        const result = await taskModel.findOne(rows);
        if (!result) throw new Error("tasks not found");
        return result;
    } catch (error: any) {
        throw new ApplicationError(500, error.message, "find task");
    }
}
