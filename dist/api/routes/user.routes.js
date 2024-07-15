"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("@controllers/index");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post('/', index_1.createUserController);
router.put('/login', index_1.loginUserController);
exports.default = router;
