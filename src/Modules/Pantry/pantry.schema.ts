import { z } from 'zod';

export const createPantrySchema = z.object({
    Name: z.string().min(1).max(100),
});

export const addPantryItemSchema = z.object({
    ProductId: z.coerce.number().int().positive(),
    Quantity: z.number().positive(),
    ExpirationDate: z.coerce.date().optional(),
    Location: z.string().max(255).nullable().optional(),
    Notes: z.string().max(500).nullable().optional(),
});

export const getPantrySchema = z.object({
    Id: z.number().int().positive(),
    PantryId: z.number().int().positive(),
    ProductId: z.number().int().positive(),
    Quantity: z.number().positive(),
    ExpirationDate: z.date().nullable(),
    Location: z.string().max(255).nullable(),
    Notes: z.string().max(500).nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    Product: z.object({
        Name: z.string(),
        Brand: z.string(),
        BarCode: z.string()
    })
});

export const pantryQuerySchema = z.object({
    status: z.enum(['EXPIRED', 'EXPIRING_TODAY', 'CRITICAL', 'EXPIRING_IN_7_DAYS', 'FRESH']).optional()
});

export const DeletePantryItemSchema = z.object({
    id: z.coerce.number().int().positive()
});
export const getPantryItemParamsSchema = z.object({
    id: z.coerce.number().int().positive()
});

export type PantryQueryDto = z.infer<typeof pantryQuerySchema>;

export const updatePantryItemSchema = addPantryItemSchema.partial();
export type CreatePantryDto = z.infer<typeof createPantrySchema>;
export type AddPantryItemDto = z.infer<typeof addPantryItemSchema>;
export type UpdatePantryItemDto = z.infer<typeof updatePantryItemSchema>;
export type GetPantryDto = z.infer<typeof getPantrySchema>;