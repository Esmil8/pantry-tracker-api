"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Prisma_1 = require("../../Shared/Prisma");
class LoginService {
    async LoginAuthService(Data) {
        const User = await Prisma_1.prisma.user.findUnique({ where: { Email: Data.Email } });
        if (!User) {
            const error = new Error("User not found");
            error.statusCode = 404;
            throw error;
        }
        const PasswordCompare = await bcryptjs_1.default.compare(Data.Password, User.PasswordHash);
        if (!PasswordCompare) {
            const error = new Error("Invalid credentials");
            error.statusCode = 401;
            throw error;
        }
        const token = jsonwebtoken_1.default.sign({ id: User.Id }, process.env.JWT_SECRET, { expiresIn: "4h" });
        return { token, User: { email: User.Email } };
    }
    async Register(Data) {
        const User = await Prisma_1.prisma.user.findUnique({ where: { Email: Data.Email } });
        if (User) {
            const error = new Error("Your account already exits");
            error.statusCode = 409;
            throw error;
        }
        if (Data.Password != Data.ConfirmPassword) {
            const error = new Error("The Password should be the same");
            error.statusCode = 400;
            throw error;
        }
        const HashData = await bcryptjs_1.default.hash(Data.Password, 10);
        await Prisma_1.prisma.user.create({
            data: {
                Email: Data.Email,
                PasswordHash: HashData,
                Name: Data.Name,
                LastName: Data.LastName
            }
        });
        return "User created successfully, Login now";
    }
}
exports.LoginService = LoginService;
