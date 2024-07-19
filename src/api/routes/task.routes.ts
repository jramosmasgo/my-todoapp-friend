import { createTaskController, getTaskByDateController, getTaskByIdController, getTaskByUserController, updateTaskController } from "@controllers/index";
import tokenValidation from "@middlewares/jwt.middleware";
import { Router } from "express";

const router = Router();

router.post('/', [createTaskController]);

router.put('/:taskId', [updateTaskController]);

router.get('/:taskId', [getTaskByIdController])

router.get('/user/:userId', [getTaskByUserController]);

// check out 
router.put('/user/tasks/:userId', [getTaskByDateController]);

export default router;