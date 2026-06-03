"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUnitsParamsSchema = exports.getUnitsQuerySchema = exports.createUnitSchema = void 0;
const zod_1 = require("zod");
exports.createUnitSchema = zod_1.z.object({
    Name: zod_1.z.string().min(1).max(100),
    Abbreviation: zod_1.z.string().min(1).max(10),
});
exports.getUnitsQuerySchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    abbreviation: zod_1.z.string().optional(),
});
exports.getUnitsParamsSchema = zod_1.z.object({
    id: zod_1.z.coerce.number().int().positive()
});
