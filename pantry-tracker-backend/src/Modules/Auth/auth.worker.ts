import * as argon2 from 'argon2';

interface WorkerTask {
    type: 'verify' | 'hash';
    password: string;
    hash?: string;
}

export default async function ({ type, password, hash }: WorkerTask): Promise<boolean | string> {
    if (type === 'verify') {
        if (!hash) throw new Error('Hash is required for verify operation');
        return argon2.verify(hash, password);
    }

    if (type === 'hash') {
        return argon2.hash(password);
    }

    throw new Error(`Unknown task type: ${type}`);
}