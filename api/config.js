const PORT = process.env.PORT || 3005;

const DB_HOST = process.env.HOST ;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;
const DB_PORT = process.env.DB_PORT ;

module.exports = {
    DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT
}