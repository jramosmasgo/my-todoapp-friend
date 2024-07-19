import { createUserController, loginUserController, updateUserController } from "@controllers/index";
import { Router } from "express";

const router = Router();

router.post('/', createUserController);
router.put('/login', loginUserController);
router.put('/update', updateUserController);

export default router;