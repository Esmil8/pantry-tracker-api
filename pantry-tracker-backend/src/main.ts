import app from './app'
import { prisma } from './Shared/Databases/Prisma'
import { connectRedis } from './Modules/Common/Services/redis.service'

const PORT = process.env.PORT || 8000

async function startServer() {
    try {
        await connectRedis()
        await prisma.$connect()
        console.log("Database connected successfully");

        const server = app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })

        server.on('close', () => {
            prisma.$disconnect();
        });

        process.on('beforeExit', () => {
            server.closeAllConnections();
        });

    } catch (error) {
        console.error('Failed to start the server', error);
        process.exit(1)
    }
}

startServer()