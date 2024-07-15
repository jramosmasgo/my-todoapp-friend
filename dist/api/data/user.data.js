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
exports.getUserByField = exports.createUserData = void 0;
const error_core_1 = require("@core/error.core");
const index_1 = require("@schemas/index");
const createUserData = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield index_1.userModel.create(user);
    }
    catch (error) {
        throw new error_core_1.ApplicationError(500, error.message, "save user");
    }
});
exports.createUserData = createUserData;
const getUserByField = (rows) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userFounded = yield index_1.userModel.findOne(rows);
        if (!userFounded)
            throw new Error('User not founded');
        return userFounded;
    }
    catch (error) {
        throw new error_core_1.ApplicationError(500, error.message, "find User");
    }
});
exports.getUserByField = getUserByField;
