"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalErrorHandler = void 0;
const GlobalErrorHandler = (err, req, res, next) => {
    const status = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    console.log(`[Error]: ${message}`);
    res.status(status).json({
        success: false,
        status,
        message
    });
};
exports.GlobalErrorHandler = GlobalErrorHandler;
