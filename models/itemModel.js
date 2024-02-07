const {DataTypes} = require('sequelize')
const {sequelize} = require('../utils/connection_2.js')
const Category = require('./categoryModel.js');

const Item = sequelize.define("items", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    category_id: {
        type: DataTypes.INTEGER
    }
}, {
    timestamps: false
});

Item.belongsTo(Category, {
    foreignKey: "category_id"
});

module.exports = Item;