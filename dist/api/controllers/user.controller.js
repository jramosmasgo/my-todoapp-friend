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
exports.loginUserController = exports.createUserController = void 0;
const response_core_1 = __importDefault(require("@core/response.core"));
const user_service_1 = require("@services/user.service");
const createUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userCreated = yield (0, user_service_1.createUserService)(req.body);
        new response_core_1.default({ data: userCreated, action: "save user", code: 200 }).sendResponse(res);
    }
    catch (error) {
        next(error);
    }
});
exports.createUserController = createUserController;
const loginUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userFounded, token } = yield (0, user_service_1.loginUserService)(req.body.email, req.body.firebaseId);
        new response_core_1.default({ data: { userFounded, token }, action: "login user" }).sendResponse(res);
    }
    catch (error) {
        next(error);
    }
});
exports.loginUserController = loginUserController;
