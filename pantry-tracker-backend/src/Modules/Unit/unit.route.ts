import { Router } from 'express';
import { validate } from '../../Shared/Middlewares/MiddlewareValidator';
import { createUnitSchema, getUnitsQuerySchema, getUnitsParamsSchema } from './unit.schema';
import { AuthMiddleware } from '../../Shared/Middlewares/Auth.middleware';
import { UnitContainer } from '../../Utils/Container';

const router = Router();

router.get('/', AuthMiddleware, validate({ query: getUnitsQuerySchema }), UnitContainer.UnitController.getUnits.bind(UnitContainer.UnitController));
router.get('/:id', AuthMiddleware, validate({ params: getUnitsParamsSchema }), UnitContainer.UnitController.getUnitById.bind(UnitContainer.UnitController));
router.post('/', AuthMiddleware, validate({ body: createUnitSchema }), UnitContainer.UnitController.createUnit.bind(UnitContainer.UnitController));

export default router;
