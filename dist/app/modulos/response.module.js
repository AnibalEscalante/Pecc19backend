"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function success(req, res, message, status) {
    res.status(status || 200)
        .send({
        error: "",
        status: status || 200,
        message: message,
    });
}
function error(req, res, message, status) {
    res.status(status || 500)
        .send({
        error: message,
        status: status || 500,
        message: "",
    });
}
exports.default = { success, error };
