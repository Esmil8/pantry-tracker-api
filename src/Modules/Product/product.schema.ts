import { number, z } from 'zod';

export const createProductSchema = z.object({
    Name: z.string().min(1).max(100),
    Description: z.string().max(255),
    Brand: z.string().max(100),
    BarCode: z.string().max(50),
    CategoryId: z.coerce.number().int().positive(),
    UnitId: z.coerce.number().int().positive(),
});
export const getProductsQuerySchema = z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    brand: z.string().optional(),
    barcode: z.string().optional(),
    categoryId: z.coerce.number().int().positive().optional(),
    unitId: z.coerce.number().int().positive().optional(),
});
export const getProductsParamsSchema = z.object({
    id: z.coerce.number().int().positive()
})
export const deleteProductParamsSchema = z.object({
    id: z.coerce.number().int().positive()
})

export const updateProductSchema = createProductSchema.partial();

export type GetProductsQueryDto = z.infer<typeof getProductsQuerySchema>;
export type CreateProductDto = z.infer<typeof createProductSchema>;
export type UpdateProductDto = z.infer<typeof updateProductSchema>;
