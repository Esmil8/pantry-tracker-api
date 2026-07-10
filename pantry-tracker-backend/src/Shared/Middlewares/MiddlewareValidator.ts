import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";

interface MiddlewareDto {
    body?: ZodSchema;
    params?: ZodSchema;
    query?: ZodSchema;
}

export const validate = (schemas: MiddlewareDto) => {

    return (req: Request, res: Response, next: NextFunction) => {

        const parts = ['body', 'query', 'params'] as const;

        for (const part of parts) {

            const schema = schemas[part]

            if (schema) {
                const result = schema.safeParse(req[part])

                if (!result.success) {

                    return res.status(400).json({
                        message: "Validation failed",
                        errors: result.error?.issues
                    })
                }
                if (part === 'query' || part === 'params') {
                    Object.keys(req[part]).forEach(key => delete req[part][key]);
                    Object.assign(req[part], result.data);
                } else {
                    req[part] = result.data;
                }
            }
        }

        next()
    }


}