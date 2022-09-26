const { sequelize } = require('./../sequelize.connection');
const { DataTypes } = require('sequelize');
const { orderModel } = require('./order.model');

function initializeProductSchema() {

    let productModel = sequelize.define("products" ,{
        id: {
            type: DataTypes.TINYINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: sequelize.fn('NOW')
        }
    });

    productModel.hasMany(orderModel, {
        foreignKey: 'productid'
    });

    orderModel.belongsTo(productModel, {
        foreignKey: 'productid'
    });

    return productModel;

}
let productModel = initializeProductSchema();
module.exports = { productModel };