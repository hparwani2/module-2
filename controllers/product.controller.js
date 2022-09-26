const { productModel } = require('./../models/product.model');
const { orderModel } = require('./../models/order.model');

class ProductController {
    constructor() {
        this.schema = productModel;
    }

    createProduct(product) {
        return this
        .schema
        .create(product)
        .then(() => console.log('product Created'));
    }

    deleteProductById(id) {
        return this
        .schema
        .destroy({
            where: {
                id: id
            }
        })
        .then(() => console.log('product Deleted')).catch((error) => {
            console.log('error in deleting product', error);
        });
    }

    findProductById(id, orderModelRequired) {
        let orderModelInclude = null
        if(orderModelRequired) {
            orderModelInclude = this.createOrderModelInclude();
        }
        return this.schema.findOne({
            where: {
                id: id
            },
            include: [ orderModelInclude ]
        });
    }

    createOrderModelInclude() {
        return {
            required: true,
            model: orderModel
        }
    }
}
let productController = new ProductController();
module.exports = { productController };