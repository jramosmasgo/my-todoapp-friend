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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTaskByUserService = exports.getTaskByIdService = exports.getTasksByUserIdService = exports.updateTaskByIdService = exports.createTaskService = void 0;
const index_1 = require("@data/index");
const createTaskService = (task) => __awaiter(void 0, void 0, void 0, function* () { return yield (0, index_1.createTaskData)(task); });
exports.createTaskService = createTaskService;
const updateTaskByIdService = (taskId, rows) => __awaiter(void 0, void 0, void 0, function* () { return yield (0, index_1.updateTasksData)(taskId, rows); });
exports.updateTaskByIdService = updateTaskByIdService;
const getTasksByUserIdService = (userId) => __awaiter(void 0, void 0, void 0, function* () { return yield (0, index_1.getTasksByFieldData)({ userId }); });
exports.getTasksByUserIdService = getTasksByUserIdService;
const getTaskByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () { return yield (0, index_1.getTaskByFieldData)({ _id: id }); });
exports.getTaskByIdService = getTaskByIdService;
const getTaskByUserService = (userId) => __awaiter(void 0, void 0, void 0, function* () { return yield (0, index_1.getTasksByFieldData)({ userId, active: true }); });
exports.getTaskByUserService = getTaskByUserService;
