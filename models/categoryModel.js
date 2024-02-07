const {DataTypes} = require('sequelize')
const {sequelize} = require('../utils/connection_2.js')

const Category = sequelize.define("category", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }, 
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
});

module.exports = Category;