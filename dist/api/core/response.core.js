"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResponseApi {
    constructor(param) {
        this.data = {
            ok: param.ok != undefined ? false : true,
            data: param.data || null,
            message: param.message,
            action: param.action || "",
            code: param.code || 200,
        };
    }
    sendResponse(res) {
        return res.status(this.data.code).json(this.data);
    }
}
exports.default = ResponseApi;
