const { userController } = require('./controllers/user.controller');
const { productController } = require('./controllers/product.controller');
const { executeWithSync } = require('./sequelize.connection');

let p1 = userController
.findUserById(2, true)
.then((data) => {
    console.log(data);
})
;

executeWithSync(p1);