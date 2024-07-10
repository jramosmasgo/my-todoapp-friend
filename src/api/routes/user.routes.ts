import { createUserController, loginUserController } from "@controllers/index";
import { Router } from "express";

const router = Router();

router.post('/', createUserController);
router.put('/login', loginUserController)

export default router;