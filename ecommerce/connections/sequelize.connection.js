const { Sequelize } = require('sequelize');
const dbConfig = require('../configs/db.config');

function createConnection() {
    let sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
        host : dbConfig.HOST,
        dialect : dbConfig.dialect,
        define : {
            timestamps : false
        },
        pool : dbConfig.pool
    });

    sequelize.authenticate().then(() => {
        console.log('Connected Successfully');
    }).catch((error) => {
        console.log('Error while connecting', error);
    });

    return { sequelize };
}

let { sequelize } = createConnection();
function executeWithSync(promise) {
    sequelize.sync().then(() => promise);
}

module.exports = { sequelize, executeWithSync };