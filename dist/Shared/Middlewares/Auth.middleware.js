"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const AuthMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({
            success: false,
            statusCode: 401,
            message: " Unauthorized "
        });
    }
    try {
        if (!process.env.JWT_SECRET) {
            const error = new Error("JWT_SECRET not defined");
            error.statusCode = 500;
            throw error;
        }
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        req.user = { id: decoded.id };
        next();
    }
    catch (err) {
        return res.status(401).json({
            sucess: false,
            statusCode: 401,
            message: "Invalid Token "
        });
    }
};
exports.AuthMiddleware = AuthMiddleware;
