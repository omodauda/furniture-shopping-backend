"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorMiddleware(error, req, res, _next) {
    const status = error.status || 500;
    const message = error.message || 'Internal Server Error';
    res
        .status(status)
        .json({
        status: 'fail',
        message
    });
}
exports.default = errorMiddleware;
