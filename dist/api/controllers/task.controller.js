"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTaskByUserController = exports.getTaskByIdController = exports.updateTaskController = exports.createTaskController = void 0;
const response_core_1 = __importDefault(require("@core/response.core"));
const index_1 = require("@services/index");
const createTaskController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const taskCrated = yield (0, index_1.createTaskService)(req.body);
        new response_core_1.default({ data: taskCrated, action: "save task", code: 200 }).sendResponse(res);
    }
    catch (error) {
        next(error);
    }
});
exports.createTaskController = createTaskController;
const updateTaskController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const taskUpdated = yield (0, index_1.updateTaskByIdService)(req.params.taskId, req.body);
        new response_core_1.default({ data: taskUpdated, action: "updateUser", code: 200 }).sendResponse(res);
    }
    catch (error) {
        next(error);
    }
});
exports.updateTaskController = updateTaskController;
const getTaskByIdController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const taskFounded = yield (0, index_1.getTaskByIdService)(req.params.taskId);
        new response_core_1.default({ data: taskFounded, action: "get specific task", code: 200 }).sendResponse(res);
    }
    catch (error) {
        next(error);
    }
});
exports.getTaskByIdController = getTaskByIdController;
const getTaskByUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasksFounded = yield (0, index_1.getTaskByUserService)(req.params.userId);
        new response_core_1.default({ data: tasksFounded, action: "get tasks", code: 200 }).sendResponse(res);
    }
    catch (error) {
        next(error);
    }
});
exports.getTaskByUserController = getTaskByUserController;
