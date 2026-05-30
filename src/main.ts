import app from './app'
import { prisma } from './Shared/Prisma'

const PORT = process.env.PORT || 3000

async function startServer() {
    try {
        await prisma.$connect()
        console.log("Database connected successfully");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    } catch (error) {
        console.error('Failed to start the server', error);
        process.exit(1)
    }
}

startServer()