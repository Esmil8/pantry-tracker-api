import redisClient from "./redis.service";

export const setRedis = async (key: string, value: any, ttlSeconds: number = 3600) => {
    await redisClient.set(key, JSON.stringify(value), { EX: ttlSeconds });
}

export const getRedis = async (key: string) => {
    const value = await redisClient.get(key);
    return value ? JSON.parse(value) : null;
}

export const deleteRedis = async (key: string) => {
    await redisClient.del(key);
}

export const deleteRedisPattern = async (pattern: string) => {
    const keys = await redisClient.keys(pattern);
    if (keys.length > 0) {
        await redisClient.del(keys);
    }
}