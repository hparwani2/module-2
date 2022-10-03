const { sequelize } = require('./../connections/sequelize.connection');
const { DataTypes } = require('sequelize');

function initializeCategorySchema() {
    const categorySchema = sequelize.define('category', {
        id : {
            type : DataTypes.TINYINT,
            allowNull : false,
            primaryKey : true,
            autoIncrement : true
        },
        name : {
            type : DataTypes.STRING,
            allowNull : false
        },
        created_at : {
            type : DataTypes.DATE,
            defaultValue : sequelize.fn('NOW')
        }
    })

    return categorySchema;
}

let categorySchema = initializeCategorySchema();
module.exports = { categorySchema };