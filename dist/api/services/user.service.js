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
exports.loginUserService = exports.createUserService = void 0;
const user_data_1 = require("@data/user.data");
const token_util_1 = require("@utils/token.util");
const createUserService = (user) => __awaiter(void 0, void 0, void 0, function* () { return yield (0, user_data_1.createUserData)(user); });
exports.createUserService = createUserService;
const loginUserService = (email, firebaseId) => __awaiter(void 0, void 0, void 0, function* () {
    const userFounded = yield (0, user_data_1.getUserByField)({ email, firebaseId });
    const token = yield (0, token_util_1.createAuthToken)({ userId: userFounded._id });
    return { userFounded, token };
});
exports.loginUserService = loginUserService;
