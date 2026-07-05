import express from 'express'
import morgan from 'morgan'
import { GlobalErrorHandler } from './Shared/Middlewares/GlobalErrorHandler'
import pantryRoutes from './Modules/Pantry/pantry.route'
import productRoutes from './Modules/Product/product.route'
import categoryRoutes from './Modules/Category/category.route'
import unitRoutes from './Modules/Unit/unit.route'
import authRoutes from './Modules/Auth/Auth.route'
import helmet from 'helmet'
import "dotenv/config"
import rateLimiter from './Shared/Middlewares/rateLimiter'

const app = express()

app.use(morgan('dev'))
app.use(helmet())
app.use(express.json())
app.use(rateLimiter)

app.use('/pantry', pantryRoutes)
app.use('/products', productRoutes)
app.use('/categories', categoryRoutes)
app.use('/units', unitRoutes)
app.use('/auth', authRoutes)

app.use(GlobalErrorHandler)

export default app