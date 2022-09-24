const { userConroller } = require('./controllers/user.controller');
const { executeWithSync } = require('./sequelize.connection');

let p1 = userConroller.createUser({
    name: 'pallab',
    email: 'pallab@gmail.com',
    password: 'pallab@123'
}).then(() => userConroller.deleteUserById(13));

executeWithSync(p1);