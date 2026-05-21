
import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
import { AuthInterface } from "../../Modules/Auth/Auth.schema";

export const AuthMiddleware = (req: AuthInterface, res: Response, next: NextFunction) => {

    const authHeader = req.headers.authorization
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {

        return res.status(401).json({
            success: false,
            statusCode: 401,
            message: " Unauthorized "

        })
    }

    try {


        const decoded = jwt.verify(token, process.env.JWT_SECRET || "FallbackKey") as { id: number }

        req.user = { id: decoded.id }
        next()

    } catch (err) {
        return res.status(401).json({

            sucess: false,
            statusCode: 401,
            message: "Invalid Token "

        })
    }

}
