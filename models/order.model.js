const { sequelize } = require('./../sequelize.connection');
const { DataTypes } = require('sequelize');

function initializeOrderSchema() {

    let orderModel = sequelize.define("orders" ,{
        id: {
            type: DataTypes.TINYINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        productid: {
            type: DataTypes.TINYINT,
            allowNull: false
        },
        userid: {
            type: DataTypes.TINYINT,
            allowNull: false
        },
        payment: {
            type: DataTypes.FLOAT,
            defaultValue: 0.0
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: sequelize.fn('NOW')
        }
    });

    return orderModel;

}
let orderModel = initializeOrderSchema();
module.exports = { orderModel };