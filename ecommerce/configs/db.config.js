require('dotenv').config();

module.exports = {
    HOST : process.env.DB_HOST,
    USER : process.env.DB_USER,
    PASSWORD : process.env.DB_PASSWORD,
    DB : process.env.DB_NAME,
    dialect : 'mysql',
    pool : {
        max : 5,
        min : 0,
        acquire : 30000, //max time in ms that a pool was creating connection before throwing error
        idle : 10000 //max time in ms that a connection occure before being released
    }
}