import "dotenv/config"
import { PrismaClient } from "../../generated/prisma"
import { PrismaMssql } from "@prisma/adapter-mssql"

const adapter = new PrismaMssql({
    server: "localhost",
    port: 1433,
    database: "pantrytracker",
    user: "sa",
    password: process.env.SA_PASSWORD,
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
})
export const prisma = new PrismaClient({
    adapter,
    log: [
        { emit: 'stdout', level: 'query' },
        { emit: 'stdout', level: 'info' },
        { emit: 'stdout', level: 'warn' },
        { emit: 'stdout', level: 'error' },

    ],
});