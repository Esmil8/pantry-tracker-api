import { Router } from 'express'
import { validate } from '../../Shared/Middlewares/MiddlewareValidator'
import { createProductSchema, updateProductSchema, getProductsQuerySchema, getProductsParamsSchema, deleteProductParamsSchema } from './product.schema'
import { AuthMiddleware } from '../../Shared/Middlewares/Auth.middleware'
import { ProductContainer } from '../../Shared/Container';
const router = Router()

router.get('/', AuthMiddleware, validate({ query: getProductsQuerySchema }), ProductContainer.ProductController.getProducts.bind(ProductContainer.ProductController));
router.get('/:id', AuthMiddleware, validate({ params: getProductsParamsSchema }), ProductContainer.ProductController.getProductsById.bind(ProductContainer.ProductController));
router.post('/', AuthMiddleware, validate({ body: createProductSchema }), ProductContainer.ProductController.createProduct.bind(ProductContainer.ProductController))
router.put('/:id', AuthMiddleware, validate({ params: getProductsParamsSchema, body: updateProductSchema }), ProductContainer.ProductController.updateProduct.bind(ProductContainer.ProductController))
router.delete('/:id', AuthMiddleware, validate({ params: deleteProductParamsSchema }), ProductContainer.ProductController.deleteProduct.bind(ProductContainer.ProductController))

export default router;