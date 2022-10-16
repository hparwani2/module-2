let { Sequelize, DataTypes } = require('sequelize');

// console.log(Sequelize);

let sequelize = new Sequelize('ecommerce', 'root', 'root') ({
   host: 'localhost',
   dialect: 'mysql'
});

sequelize.authntication().then(() => {
    console.log('Connected Succesfully');
}).catch((error) => {
    console.log('Error while connecting', error);
})
