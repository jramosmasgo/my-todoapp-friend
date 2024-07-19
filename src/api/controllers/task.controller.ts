import ResponseApi from "@core/response.core";
import { ITask } from "@interfaces/index";
import { createTaskService, getTaskByIdService, getTaskByUserService, getTasksByDateService, updateTaskByIdService } from "@services/index";
import { Response, Request, NextFunction } from "express";

export const createTaskController = async (req: Request<{}, {}, ITask>, res: Response, next: NextFunction) => {
    try {
        const taskCrated = await createTaskService(req.body);
        new ResponseApi<ITask>({ data: taskCrated, action: "save task", code: 200 }).sendResponse(res);
    } catch (error) {
        next(error)
    }
}

export const updateTaskController = async (req: Request<{ taskId: string }, {}, ITask>, res: Response, next: NextFunction) => {
    try {
        const taskUpdated = await updateTaskByIdService(req.params.taskId, req.body);
        new ResponseApi<ITask>({ data: taskUpdated, action: "updateUser", code: 200 }).sendResponse(res);
    } catch (error) {
        next(error)
    }
}

export const getTaskByIdController = async (req: Request<{ taskId: string }, {}, {}>, res: Response, next: NextFunction) => {
    try {
        const taskFounded = await getTaskByIdService(req.params.taskId);
        new ResponseApi<ITask>({ data: taskFounded, action: "get specific task", code: 200 }).sendResponse(res);
    } catch (error) {
        next(error)
    }
}

export const getTaskByUserController = async (req: Request<{ userId: string }, {}, { date: Date }>, res: Response, next: NextFunction) => {
    try {
        const tasksFounded = await getTaskByUserService(req.params.userId);
        new ResponseApi<ITask[]>({ data: tasksFounded, action: "get tasks", code: 200 }).sendResponse(res);
    } catch (error) {
        next(error)
    }
}

export const getTaskByDateController = async (req: Request<{ userId: string }, {}, { date: Date }>, res: Response, next: NextFunction) => {
    try {
        const tasksFounded = await getTasksByDateService(req.params.userId, req.body.date);
        new ResponseApi<ITask[]>({ data: tasksFounded, action: "get tasks by date", code: 200 }).sendResponse(res);
    } catch (error) {
        next(error)
    }
}

