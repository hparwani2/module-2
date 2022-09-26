const { sequelize } = require('./../sequelize.connection');
const { DataTypes } = require('sequelize');
const { userModel } = require('./user.model');

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
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: sequelize.fn('NOW')
        }
    });

    orderModel.hasOne(userModel, {
        foreignKey: 'userid'
    });

    userModel.belongsToMany(orderModel, {
        foreignKey: 'userid'
    });

    return orderModel;

}
let orderModel = initializeOrderSchema();
module.exports = { orderModel };