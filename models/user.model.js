const { sequelize } = require('./../sequelize.connection');
const { DataTypes } = require('sequelize');

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

    return userModel;

}

module.exports = { initializeUserSchema };