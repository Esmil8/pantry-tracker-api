import { z } from 'zod'
import { Request } from 'express'

export interface AuthInterface extends Request {
    user?: { id: number }
}


export const LoginSchema = z.object({
    Email: z.string().email(),
    Password: z.string().min(6),
})

export type LoginSchemaDto = z.infer<typeof LoginSchema>;

export const RegisterSchema = z.object({
    Name: z.string().min(3),
    LastName: z.string().min(3),
    Email: z.string().email(),
    Password: z.string().min(6),
    ConfirmPassword: z.string().min(6),
})

export type RegisterSchemaDto = z.infer<typeof RegisterSchema>

export const changePasswordSchema = z.object({
    currentPassword: z.string().min(6),
    newPassword: z.string().min(6),
    confirmNewPassword: z.string().min(6),
})

export type ChangePasswordDto = z.infer<typeof changePasswordSchema>;
