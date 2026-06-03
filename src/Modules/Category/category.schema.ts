import { z } from 'zod';

export const createCategorySchema = z.object({
    Name: z.string().min(1).max(100),
    Description: z.string().max(255).default(""),
});

export const getCategoriesQuerySchema = z.object({
    name: z.string().optional(),
    description: z.string().optional(),
});

export const getCategoriesParamsSchema = z.object({
    id: z.coerce.number().int().positive()
});

export type CreateCategoryDto = z.infer<typeof createCategorySchema>;
export type GetCategoriesQueryDto = z.infer<typeof getCategoriesQuerySchema>;
