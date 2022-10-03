const { categorySchema } = require('./../models/category.model');

class CategoryService {
    schema;
    constructor() {
        this.schema = categorySchema;
    }

    getCategories() {
        return this
        .schema
        .findAll();
    }

    getCategoriesById() {
        return this
        .schema
        .findOne({
            where : {
                id : id
            }
        })
    }
}

let categoryService = new CategoryService();
module.exports = { categoryService };