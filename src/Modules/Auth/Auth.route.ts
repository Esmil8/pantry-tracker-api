import { LoginController } from './Auth.controller'
import { Router } from 'express'
import { LoginService } from './AuthService'
import { LoginSchema, RegisterSchema } from './Auth.schema'
import { validate } from '../../Shared/Middlewares/MiddlewareValidator';

const AuthService = new LoginService()
const authController = new LoginController(AuthService);
const router = Router()

router.post('/login', validate({ body: LoginSchema }), (req, res, next) => authController.LoginAuth(req, res, next))

router.post('/register', validate({ body: RegisterSchema }), (req, res, next) => authController.Register(req, res, next))

export default router