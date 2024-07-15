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
exports.getTaskByFieldData = exports.getTasksByFieldData = exports.updateTasksData = exports.createTaskData = void 0;
const error_core_1 = require("@core/error.core");
const index_1 = require("@schemas/index");
const createTaskData = (task) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield index_1.taskModel.create(task);
    }
    catch (error) {
        throw new error_core_1.ApplicationError(500, error.message, "save task");
    }
});
exports.createTaskData = createTaskData;
const updateTasksData = (taskId, rows) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield index_1.taskModel.findByIdAndUpdate(taskId, rows, { new: true });
        if (!result)
            throw new Error("task not found");
        return result;
    }
    catch (error) {
        throw new error_core_1.ApplicationError(500, error.message, "save task");
    }
});
exports.updateTasksData = updateTasksData;
const getTasksByFieldData = (rows) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield index_1.taskModel.find(rows);
        if (!results)
            throw new Error("tasks not found");
        return results;
    }
    catch (error) {
        throw new error_core_1.ApplicationError(500, error.message, "find tasks");
    }
});
exports.getTasksByFieldData = getTasksByFieldData;
const getTaskByFieldData = (rows) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield index_1.taskModel.findOne(rows);
        if (!result)
            throw new Error("tasks not found");
        return result;
    }
    catch (error) {
        throw new error_core_1.ApplicationError(500, error.message, "find task");
    }
});
exports.getTaskByFieldData = getTaskByFieldData;
