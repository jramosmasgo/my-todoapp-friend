"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const taskSchema = new mongoose_1.Schema({
    userId: {
        type: mongoose_1.Types.ObjectId,
        required: true,
        ref: 'Users'
    },
    title: {
        type: String,
        required: true
    },
    details: {
        type: String,
    },
    startDate: {
        type: Date,
        required: true
    },
    durationMinutes: {
        type: Number,
        required: true
    },
    level: {
        type: Number,
        required: true
    },
    location: {
        type: String
    },
    alert: {
        type: Boolean,
        default: false
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    repeatType: {
        type: String,
        required: true
    },
    repeatWeekDays: {
        type: String,
    },
    alertVoice: {
        type: Boolean,
        required: true,
        default: false,
    },
    readDetails: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});
exports.taskModel = mongoose_1.default.model("Tasks", taskSchema);
