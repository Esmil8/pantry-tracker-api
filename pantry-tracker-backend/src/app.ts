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
import cors from 'cors';

const app = express()


const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:5174',
    'http://localhost:3000',
    'http://127.0.0.1:5173',
    'http://127.0.0.1:5174'
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);

        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));


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