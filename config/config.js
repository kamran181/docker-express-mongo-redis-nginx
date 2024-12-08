const config = {
    MONGO_IP: process.env.MONO_IP || 'mongo-db',
    MONGO_PORT: process.env.MONGO_PORT || 27017,
    MONGO_USER: process.env.MONGO_USER || "kamran",
    MONGO_PASSWORD: process.env.MONGO_PASSWORD || "khan",
    REDIS_URL:process.env.REDIS_URL || "redis",
    REDIS_PORT : process.env.REDIS_PORT || 6379,
    SESSION_SECRET : process.env.SESSION_SECRET || "secret"
};

export default config;