import { Router } from 'express';
import { validate } from '../../Shared/Middlewares/MiddlewareValidator';
import { createPantrySchema, addPantryItemSchema, updatePantryItemSchema, userIdParamsSchema, DeletePantryItemSchema, pantryQuerySchema, getPantryItemParamsSchema } from './pantry.schema';
import { AuthMiddleware } from '../../Shared/Middlewares/Auth.middleware'
import { PantryContainer } from '../../Shared/Container';

const router = Router();

router.get('/:userId', AuthMiddleware, validate({ params: userIdParamsSchema }), PantryContainer.PantryController.FindPantriesByUser.bind(PantryContainer.PantryController))
router.get('/:pantryId/items', AuthMiddleware, validate({ query: pantryQuerySchema }), PantryContainer.PantryController.FilterInventoryByPantry.bind(PantryContainer.PantryController))
router.post('/', AuthMiddleware, validate({ body: createPantrySchema }), PantryContainer.PantryController.CreatePantry.bind(PantryContainer.PantryController))
router.post('/:pantryId/items', AuthMiddleware, validate({ body: addPantryItemSchema }), PantryContainer.PantryController.AddItemToPantry.bind(PantryContainer.PantryController))
router.put('/:pantryId/items/:id', AuthMiddleware, validate({ params: getPantryItemParamsSchema, body: updatePantryItemSchema }), PantryContainer.PantryController.UpdatePantryItem.bind(PantryContainer.PantryController))
router.delete('/:pantryId/items/:id', AuthMiddleware, validate({ params: DeletePantryItemSchema }), PantryContainer.PantryController.DeletePantryItem.bind(PantryContainer.PantryController))

export default router