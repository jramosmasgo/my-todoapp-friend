import { createTaskController, getTaskByIdController, getTaskByUserController, updateTaskController } from "@controllers/index";
import tokenValidation from "@middlewares/jwt.middleware";
import { Router } from "express";

const router = Router();

router.post('/', [createTaskController]);

router.put('/:taskId', [updateTaskController]);

router.get('/:taskId', [getTaskByIdController])

router.get('/user/:userId', [getTaskByUserController]);

export default router;