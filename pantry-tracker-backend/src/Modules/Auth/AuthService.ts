import path from 'path';
import Piscina from 'piscina';
import jwt from 'jsonwebtoken';
import { prisma } from '../../Shared/Databases/Prisma';
import { LoginSchemaDto, RegisterSchemaDto, ChangePasswordDto } from './Auth.schema';

const isDev = __filename.endsWith('.ts');

// minThreads: 0 means Piscina won't keep idle worker threads alive.
// We also clear NODE_OPTIONS in the worker env to prevent worker threads
// from loading the Clinic.js sampler. If they do, they will write to the
// same processstat file as the main thread (since they share PID), corrupting
// the file and causing "Error: Decoded message is not valid".
const authPool = new Piscina({
    filename: path.resolve(
        __dirname,
        isDev ? './auth.worker.ts' : './auth.worker.js',
    ),
    ...(isDev && { execArgv: ['--import', 'tsx'] }),
    minThreads: 0,
    maxThreads: 4,
    env: {
        ...process.env,
        NODE_OPTIONS: '', // Disable Clinic sampler injection in worker threads
    },
});

interface AuthWorkerTask {
    type: 'verify' | 'hash';
    password: string;
    hash?: string;
}

export class LoginService {

    private runAuthWorker(workerData: AuthWorkerTask): Promise<boolean | string> {
        return authPool.run(workerData);
    }

    async LoginAuthService(Data: LoginSchemaDto) {
        const User = await prisma.user.findUnique({ where: { Email: Data.Email } });
        if (!User) {
            const error: any = new Error('User not found');
            error.statusCode = 404;
            throw error;
        }

        const isValid = await this.runAuthWorker({
            type: 'verify',
            password: Data.Password,
            hash: User.PasswordHash,
        });

        if (!isValid) {
            const error: any = new Error('Invalid credentials');
            error.statusCode = 401;
            throw error;
        }

        const token = jwt.sign({ id: User.Id }, process.env.JWT_SECRET!, { expiresIn: '4h' });
        return {
            token,
            user: {
                id: User.Id,
                name: User.Name,
                lastName: User.LastName,
                email: User.Email
            }
        };
    }

    async Register(Data: RegisterSchemaDto) {
        if (Data.Password !== Data.ConfirmPassword) {
            const error: any = new Error('The Password should be the same');
            error.statusCode = 400;
            throw error;
        }

        const existing = await prisma.user.findUnique({ where: { Email: Data.Email } });
        if (existing) {
            const error: any = new Error('Your account already exits');
            error.statusCode = 409;
            throw error;
        }

        const HashData = await this.runAuthWorker({
            type: 'hash',
            password: Data.Password,
        });

        await prisma.user.create({
            data: {
                Email: Data.Email,
                PasswordHash: HashData as string,
                Name: Data.Name,
                LastName: Data.LastName,
            },
        });

        return 'User created successfully, Login now';
    }

    async changePasswordService(userId: number, data: ChangePasswordDto) {
        if (data.newPassword !== data.confirmNewPassword) {
            const error: any = new Error('Passwords do not match');
            error.statusCode = 400;
            throw error;
        }

        const User = await prisma.user.findUnique({ where: { Id: userId } });
        if (!User) {
            const error: any = new Error('User not found');
            error.statusCode = 404;
            throw error;
        }

        const isValid = await this.runAuthWorker({
            type: 'verify',
            password: data.currentPassword,
            hash: User.PasswordHash,
        });

        if (!isValid) {
            const error: any = new Error('Invalid current password');
            error.statusCode = 401;
            throw error;
        }

        const HashData = await this.runAuthWorker({
            type: 'hash',
            password: data.newPassword,
        });

        await prisma.user.update({
            where: { Id: userId },
            data: { PasswordHash: HashData as string },
        });

        return 'Password changed successfully';
    }

    async deleteAuthService(userId: number, currentPassword: string) {
        const User = await prisma.user.findUnique({ where: { Id: userId } });
        if (!User) {
            const error: any = new Error('User not found');
            error.statusCode = 404;
            throw error;
        }

        const isValid = await this.runAuthWorker({
            type: 'verify',
            password: currentPassword,
            hash: User.PasswordHash,
        });

        if (!isValid) {
            const error: any = new Error('Invalid password');
            error.statusCode = 401;
            throw error;
        }

        await prisma.user.delete({ where: { Id: userId } });
        return 'User deleted successfully';
    }
}