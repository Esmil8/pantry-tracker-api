"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterSchema = exports.LoginSchema = void 0;
const zod_1 = require("zod");
exports.LoginSchema = zod_1.z.object({
    Email: zod_1.z.string().email(),
    Password: zod_1.z.string().min(6),
});
exports.RegisterSchema = zod_1.z.object({
    Name: zod_1.z.string().min(3),
    LastName: zod_1.z.string().min(3),
    Email: zod_1.z.string().email(),
    Password: zod_1.z.string().min(6),
    ConfirmPassword: zod_1.z.string().min(6),
});
