import { Router } from "express";
import userController from "@routes/user.routes";
import taskController from "@routes/task.routes";

const router = Router();

// user routes
router.use("/user", userController);
router.use("/task", taskController);

export default router;
