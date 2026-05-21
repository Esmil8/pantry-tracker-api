import { prisma } from '../../Shared/Prisma'
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


}