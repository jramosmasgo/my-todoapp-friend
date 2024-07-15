"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_routes_1 = __importDefault(require("@routes/user.routes"));
const task_routes_1 = __importDefault(require("@routes/task.routes"));
const router = (0, express_1.Router)();
// user routes
router.get('/', (req, res, next) => {
    res.status(200).json({
        ok: 'true'
    });
});
router.use("/api/user", user_routes_1.default);
router.use("/api/task", task_routes_1.default);
exports.default = router;
