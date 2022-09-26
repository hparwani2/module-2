const { sequelize } = require('./../sequelize.connection');
const { DataTypes } = require('sequelize');
const { orderModel } = require('./order.model');

function initializeUserSchema() {

    let userModel = sequelize.define("users" ,{
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
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: sequelize.fn('NOW')
        }
    });

    userModel.hasMany(orderModel, {
        foreignKey: 'userid'
    });

    orderModel.belongsTo(userModel, {
        foreignKey: 'userid'
    });

    return userModel;

}
let userModel = initializeUserSchema();
module.exports = { userModel };