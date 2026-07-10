import { rateLimit } from 'express-rate-limit';
import { RedisStore } from 'rate-limit-redis';
import redisClient from '../../Modules/Common/Services/redis.service';

const rateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    standardHeaders: true,
    legacyHeaders: false,

    store: new RedisStore({
        sendCommand: async (...args: string[]) => {
            if (!redisClient.isOpen) {
                await new Promise<void>((resolve) => {
                    const checkConnection = () => {
                        if (redisClient.isOpen) {
                            resolve();
                        } else {
                            setTimeout(checkConnection, 50);
                        }
                    };
                    checkConnection();
                });
            }
            return redisClient.sendCommand(args);
        },
    }),
    message: {
        status: 429,
        message: 'Too many requests from this IP, please try again later.'
    }
});

export default rateLimiter;
