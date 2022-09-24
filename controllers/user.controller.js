let { initializeUserSchema } = require('./../models/user.model');

class UserController {
    constructor() {
        this.schema = initializeUserSchema();
    }

    createUser(user) {
        return this
        .schema
        .create(user)
        .then(() => console.log('User Created'));
    }

    deleteUserById(id) {
        return this
        .schema
        .destroy({
            where: {
                id: id
            }
        })
        .then(() => console.log('User Deleted')).catch((error) => {
            console.log('error in deleting user', error);
        });
    }

    updateUserById(user, id) {

    }

    findUserById(id) {
        
    }

    findAllUsers() {
        return this
        .schema
        .findAll()
        .then(() => console.log('User Fetched'));
    }
}
let userConroller = new UserController();
module.exports = { userConroller };