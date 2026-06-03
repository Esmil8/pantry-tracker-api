"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
require("dotenv/config");
const prisma_1 = require("../../generated/prisma");
const adapter_mssql_1 = require("@prisma/adapter-mssql");
const adapter = new adapter_mssql_1.PrismaMssql({
    server: "localhost",
    port: 1433,
    database: "pantrytracker",
    user: "sa",
    password: process.env.SA_PASSWORD || "Esmit#989713",
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
});
exports.prisma = new prisma_1.PrismaClient({ adapter });
