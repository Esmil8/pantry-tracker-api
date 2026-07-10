import { z } from 'zod';

export const createUnitSchema = z.object({
    Name: z.string().min(1).max(100),
    Abbreviation: z.string().min(1).max(10),
});

export const getUnitsQuerySchema = z.object({
    name: z.string().optional(),
    abbreviation: z.string().optional(),
});

export const getUnitsParamsSchema = z.object({
    id: z.coerce.number().int().positive()
});

export type CreateUnitDto = z.infer<typeof createUnitSchema>;
export type GetUnitsQueryDto = z.infer<typeof getUnitsQuerySchema>;
