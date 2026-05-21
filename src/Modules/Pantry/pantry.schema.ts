import { z } from 'zod';

export const createPantrySchema = z.object({
    ProductId: z.coerce.number().int().positive(),
    Quantity: z.number().positive(),
    ExpirationDate: z.coerce.date(),
    Location: z.string().max(255).nullable().optional(),
    Notes: z.string().max(500).nullable().optional(),

});

export const getPantrySchema = z.object({
    Id: z.number().int().positive(),
    UserId: z.number().int().positive(),
    ProductId: z.number().int().positive(),
    Quantity: z.number().positive(),
    ExpirationDate: z.date(),
    Location: z.string().max(255).nullable(),
    Notes: z.string().max(500).nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    Product: z.object({
        Name: z.string(),
        Brand: z.string(),
        Barcode: z.string()
    })
});

export const pantryQuerySchema = z.object({

    status: z.enum(['EXPIRED', 'EXPIRING_TODAY', 'CRITICAL', 'EXPIRING_IN_7_DAYS', 'FRESH']).optional()

})

export const DeletePantrySchema = z.object({

    id: z.coerce.number().int().positive()
})

export type PantryQueryDto = z.infer<typeof pantryQuerySchema>;

export const updatePantrySchema = createPantrySchema.partial();
export type CreatePantryDto = z.infer<typeof createPantrySchema>;
export type UpdatePantryDto = z.infer<typeof updatePantrySchema>;
export type GetPantryDto = z.infer<typeof getPantrySchema>;