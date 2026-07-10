import { prisma } from '../../Shared/Databases/Prisma'
import { AuthInterface } from './Auth.schema'
import { LoginService } from './AuthService'
import { Request, Response, NextFunction } from 'express'

export class LoginController {

    constructor(private LoginService: LoginService) { }

    async LoginAuth(req: Request, res: Response, next: NextFunction) {

        try {


            const Data = await this.LoginService.LoginAuthService(req.body)

            res.status(200).json({

                Message: "Login successfully",
                Data: Data

            })

        } catch (error) {

            next(error)
        }

    }

    async Register(req: Request, res: Response, next: NextFunction) {
        try {

            const Message = await this.LoginService.Register(req.body)

            res.status(201).json({

                Message: Message

            })

        } catch (error) {

            next(error)
        }
    }

    async DeleteAuth(req: AuthInterface, res: Response, next: NextFunction) {
        const { user } = req as AuthInterface
        const UserId = Number(user?.id)
        const currentPassword = req.body.PasswordHash

        try {

            const Message = await this.LoginService.deleteAuthService(UserId, currentPassword)

            res.status(200).json({

                Message: Message

            })

        } catch (error) {

            next(error)
        }
    }


}