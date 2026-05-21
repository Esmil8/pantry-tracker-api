import { Router } from 'express';
import { PantryController } from './pantry.controller';
import { validate } from '../../Shared/Middlewares/Middleware';
import { createPantrySchema, DeletePantrySchema, getPantrySchema, pantryQuerySchema, updatePantrySchema } from './pantry.schema';
import { PantryService } from './pantry.service';
import { PantryRepository } from './pantry.repository';
import { AuthMiddleware } from '../../Shared/Middlewares/Auth.middleware'

const router = Router();

const repository = new PantryRepository()
const service = new PantryService(repository)
const controller = new PantryController(service);

router.get('/', AuthMiddleware, validate({ query: pantryQuerySchema }), (req, res) => controller.FilterInventoryByUser(req, res))

router.post('/', AuthMiddleware, validate({ body: createPantrySchema }), (req, res) => controller.CreatePantry(req, res))

router.put('/:id', AuthMiddleware, validate({ params: updatePantrySchema }), (req, res) => controller.UpdatePantry(req, res))

router.delete('/:id', AuthMiddleware, validate({ params: DeletePantrySchema }), (req, res) => controller.DeletePantry(req, res))

export default router