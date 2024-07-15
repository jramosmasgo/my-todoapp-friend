import { NextFunction, Router, Request, Response } from "express";
import userController from "@routes/user.routes";
import taskController from "@routes/task.routes";

const router = Router();

// user routes
router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        ok: 'true'
    })
})



router.use("/api/user", userController);
router.use("/api/task", taskController);

export default router;
