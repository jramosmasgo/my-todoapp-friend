"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_routes_1 = __importDefault(require("@routes/index.routes"));
const error_middleware_1 = __importDefault(require("@middlewares/error.middleware"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const allowCrossDomain = {
    origin: "*",
};
app.set("server-port", process.env.PORT);
app.use((0, cors_1.default)(allowCrossDomain));
app.use(express_1.default.json());
app.use(index_routes_1.default);
app.use(error_middleware_1.default);
exports.default = app;
