import express from 'express'
import morgan from 'morgan'
import { GlobalErrorHandler } from './Shared/GlobalErrorHandler'
import pantryRoutes from './Modules/Pantry/pantry.route'
import productRoutes from './Modules/Product/product.route'
import authRoutes from './Modules/Auth/Auth.route'
import helmet from 'helmet'
import "dotenv/config"

const app = express()

//Middleware
app.use(morgan('dev'))
app.use(helmet())
app.use(express.json())

//Routes
app.use('/pantry', pantryRoutes)
app.use('/products', productRoutes)
app.use('/auth', authRoutes)

//Error Handler
app.use(GlobalErrorHandler)

export default app