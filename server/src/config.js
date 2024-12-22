module.exports = {
    PORT: parseInt(process.env.SERVER_PORT),
    ENVIRONMENT: process.env.NODE_ENV,
    MONGO_HOST: process.env.MONGO_HOST,
    MONGO_USERNAME: process.env.MONGO_USERNAME,
    MONGO_PASSWORD: process.env.MONGO_PASSWORD,
    MONGO_DBNAME: process.env.MONGO_DBNAME
}