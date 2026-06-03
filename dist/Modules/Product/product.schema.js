"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductSchema = exports.deleteProductParamsSchema = exports.getProductsParamsSchema = exports.getProductsQuerySchema = exports.createProductSchema = void 0;
const zod_1 = require("zod");
exports.createProductSchema = zod_1.z.object({
    Name: zod_1.z.string().min(1).max(100),
    Description: zod_1.z.string().max(255),
    Brand: zod_1.z.string().max(100),
    BarCode: zod_1.z.string().max(50),
    CategoryId: zod_1.z.coerce.number().int().positive(),
    UnitId: zod_1.z.coerce.number().int().positive(),
});
exports.getProductsQuerySchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    brand: zod_1.z.string().optional(),
    barcode: zod_1.z.string().optional(),
    categoryId: zod_1.z.coerce.number().int().positive().optional(),
    unitId: zod_1.z.coerce.number().int().positive().optional(),
});
exports.getProductsParamsSchema = zod_1.z.object({
    id: zod_1.z.coerce.number().int().positive()
});
exports.deleteProductParamsSchema = zod_1.z.object({
    id: zod_1.z.coerce.number().int().positive()
});
exports.updateProductSchema = exports.createProductSchema.partial();
