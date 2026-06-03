"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategoriesParamsSchema = exports.getCategoriesQuerySchema = exports.createCategorySchema = void 0;
const zod_1 = require("zod");
exports.createCategorySchema = zod_1.z.object({
    Name: zod_1.z.string().min(1).max(100),
    Description: zod_1.z.string().max(255).default(""),
});
exports.getCategoriesQuerySchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
});
exports.getCategoriesParamsSchema = zod_1.z.object({
    id: zod_1.z.coerce.number().int().positive()
});
