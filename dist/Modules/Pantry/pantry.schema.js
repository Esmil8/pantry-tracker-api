"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePantryItemSchema = exports.getPantryItemParamsSchema = exports.DeletePantryItemSchema = exports.pantryQuerySchema = exports.getPantrySchema = exports.findPantryItemQuerySchema = exports.addPantryItemSchema = exports.createPantrySchema = void 0;
const zod_1 = require("zod");
exports.createPantrySchema = zod_1.z.object({
    Name: zod_1.z.string().min(1).max(100),
});
exports.addPantryItemSchema = zod_1.z.object({
    ProductId: zod_1.z.coerce.number().int().positive(),
    Quantity: zod_1.z.number().positive(),
    ExpirationDate: zod_1.z.coerce.date().optional(),
    Location: zod_1.z.string().max(255).nullable().optional(),
    Notes: zod_1.z.string().max(500).nullable().optional(),
});
exports.findPantryItemQuerySchema = zod_1.z.object({
    ProductId: zod_1.z.coerce.number().int().positive().optional(),
    PantryId: zod_1.z.coerce.number().int().positive(),
    ProductName: zod_1.z.string().min(1).optional(),
    ExpirationDate: zod_1.z.coerce.date().optional(),
    Location: zod_1.z.string().max(255).nullable().optional(),
});
exports.getPantrySchema = zod_1.z.object({
    Id: zod_1.z.number().int().positive(),
    PantryId: zod_1.z.number().int().positive(),
    ProductId: zod_1.z.number().int().positive(),
    Quantity: zod_1.z.number().positive(),
    ExpirationDate: zod_1.z.date().nullable(),
    Location: zod_1.z.string().max(255).nullable(),
    Notes: zod_1.z.string().max(500).nullable(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    Product: zod_1.z.object({
        Name: zod_1.z.string(),
        Brand: zod_1.z.string(),
        BarCode: zod_1.z.string()
    })
});
exports.pantryQuerySchema = zod_1.z.object({
    status: zod_1.z.enum(['EXPIRED', 'EXPIRING_TODAY', 'CRITICAL', 'EXPIRING_IN_7_DAYS', 'FRESH']).optional()
});
exports.DeletePantryItemSchema = zod_1.z.object({
    id: zod_1.z.coerce.number().int().positive()
});
exports.getPantryItemParamsSchema = zod_1.z.object({
    id: zod_1.z.coerce.number().int().positive()
});
exports.updatePantryItemSchema = exports.addPantryItemSchema.partial();
