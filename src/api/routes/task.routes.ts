import { createTaskController, getTaskByIdController, getTaskByUserController, updateTaskController } from "@controllers/index";
import tokenValidation from "@middlewares/jwt.middleware";
import { Router } from "express";

const router = Router();

router.post('/', [tokenValidation, createTaskController]);

router.put('/:taskId', [tokenValidation, updateTaskController]);

router.get('/:taskId', [tokenValidation, getTaskByIdController])

router.get('/user/:userId', [tokenValidation, getTaskByUserController]);

export default router;