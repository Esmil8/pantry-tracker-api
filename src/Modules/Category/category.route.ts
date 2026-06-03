import { Router } from 'express';
import { validate } from '../../Shared/Middlewares/MiddlewareValidator';
import { createCategorySchema, getCategoriesQuerySchema, getCategoriesParamsSchema } from './category.schema';
import { AuthMiddleware } from '../../Shared/Middlewares/Auth.middleware';
import { CategoryContainer } from '../../Shared/Container';

const router = Router();

router.get('/', AuthMiddleware, validate({ query: getCategoriesQuerySchema }), CategoryContainer.CategoryController.getCategories.bind(CategoryContainer.CategoryController));
router.get('/:id', AuthMiddleware, validate({ params: getCategoriesParamsSchema }), CategoryContainer.CategoryController.getCategoryById.bind(CategoryContainer.CategoryController));
router.post('/', AuthMiddleware, validate({ body: createCategorySchema }), CategoryContainer.CategoryController.createCategory.bind(CategoryContainer.CategoryController));

export default router;
