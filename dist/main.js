"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const Prisma_1 = require("./Shared/Prisma");
const PORT = process.env.PORT || 3000;
async function startServer() {
    try {
        await Prisma_1.prisma.$connect();
        console.log("Database connected successfully");
        app_1.default.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }
    catch (error) {
        console.error('Failed to start the server', error);
        process.exit(1);
    }
}
startServer();
