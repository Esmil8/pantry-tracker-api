import { AuthInterface, LoginSchemaDto, RegisterSchemaDto, ChangePasswordDto } from './Auth.schema'
import * as argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import { prisma } from '../../Shared/Prisma';

export class LoginService {

    async LoginAuthService(Data: LoginSchemaDto) {

        const User = await prisma.user.findUnique({ where: { Email: Data.Email } })
        if (!User) {

            const error: any = new Error("User not found")
            error.statusCode = 404;
            throw error
        }

        const PasswordCompare = await argon2.verify(User.PasswordHash, Data.Password)
        if (!PasswordCompare) {

            const error: any = new Error("Invalid credentials")
            error.statusCode = 401;
            throw error


        }

        const token = jwt.sign({ id: User.Id }, process.env.JWT_SECRET!, { expiresIn: "4h" })

        return { token, User: { email: User.Email } }


    }

    async Register(Data: RegisterSchemaDto) {

        if (Data.Password != Data.ConfirmPassword) {

            const error: any = new Error("The Password should be the same")
            error.statusCode = 400
            throw error
        }

        const User = await prisma.user.findUnique({ where: { Email: Data.Email } })
        if (User) {

            const error: any = new Error("Your account already exits")
            error.statusCode = 409;
            throw error
        }

        const HashData = await argon2.hash(Data.Password);

        await prisma.user.create({

            data: {
                Email: Data.Email,
                PasswordHash: HashData,
                Name: Data.Name,
                LastName: Data.LastName
            }
        })
        return "User created successfully, Login now"
    }

    async changePasswordService(userId: number, data: ChangePasswordDto) {

        if (data.newPassword !== data.confirmNewPassword) {

            const error: any = new Error("Passwords do not match")
            error.statusCode = 400
            throw error
        }

        const User = await prisma.user.findUnique({ where: { Id: userId } });
        if (!User) {
            const error: any = new Error("User not found")
            error.statusCode = 404
            throw error
        }

        const PasswordCompare = await argon2.verify(User.PasswordHash, data.currentPassword);
        if (!PasswordCompare) {
            const error: any = new Error("Invalid current password")
            error.statusCode = 401
            throw error
        }


        const HashData = await argon2.hash(data.newPassword);

        await prisma.user.update({
            where: { Id: userId },
            data: { PasswordHash: HashData }
        });
        return "Password changed successfully";
    }

    async deleteAuthService(userId: number, currentPassword: string) {

        const User = await prisma.user.findUnique({ where: { Id: userId } });
        if (!User) {
            const error: any = new Error("User not found")
            error.statusCode = 404
            throw error
        }

        const PasswordCompare = await argon2.verify(User.PasswordHash, currentPassword);
        if (!PasswordCompare) {
            const error: any = new Error("Invalid password")
            error.statusCode = 401
            throw error
        }

        await prisma.user.delete({ where: { Id: userId } });
        return "User deleted successfully";
    }
}