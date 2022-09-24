const { Sequelize } = require("sequelize");
function createConnection() {

    let sequelize = new Sequelize('ecommerce', 'root', '123456', {
        host: 'localhost',
        dialect: 'mysql',
        define: {
            timestamps: false
        }
    });

    sequelize.authenticate().then(() => {
        console.log('connected successfully');
    }).catch((error) => {
        console.log("error occurred");
    });

    return { sequelize }

}

let { sequelize } = createConnection();

function executeWithSync(promiseCallback) {
    sequelize.sync().then(() => promiseCallback);
}

module.exports = { sequelize, executeWithSync };