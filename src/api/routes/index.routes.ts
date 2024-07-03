import { Router } from "express";
import userController from "@routes/user.routes";

const router = Router();

// user routes
router.use("/user", userController);

export default router;
