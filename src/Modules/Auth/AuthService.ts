import { AuthInterface, LoginSchemaDto, RegisterSchemaDto } from './Auth.schema'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '../../Shared/Prisma';
import { email } from 'zod';

export class LoginService {

    async LoginAuthService(Data: LoginSchemaDto) {

        const User = await prisma.user.findUnique({ where: { Email: Data.Email } })
        if (!User) {

            const error: any = new Error("User not found")
            error.statusCode = 404;
            throw error
        }

        const PasswordCompare = await bcrypt.compare(Data.Password, User.PasswordHash)
        if (!PasswordCompare) {

            const error: any = new Error("Invalid credentials")
            error.statusCode = 401;
            throw error


        }

        const token = jwt.sign({ id: User.Id }, process.env.JWT_SECRET!, { expiresIn: "4h" })

        return { token, User: { email: User.Email } }


    }

    async Register(Data: RegisterSchemaDto) {

        const User = await prisma.user.findUnique({ where: { Email: Data.Email } })
        if (User) {

            const error: any = new Error("Your account already exits")
            error.statusCode = 409;
            throw error
        }

        if (Data.Password != Data.ConfirmPassword) {

            const error: any = new Error("The Password should be the same")
            error.statusCode = 400
            throw error
        }

        const HashData = await bcrypt.hash(Data.Password, 10);

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

}
