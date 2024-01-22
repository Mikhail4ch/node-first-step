const {sequelize, testConnection} = require('./utils/connection')
const Category = require('./models/categoryModel')
const Item = require('./models/itemModel')

testConnection();

//Retreive Categories
const findCategories = async() => {
    const result = await Category.findAll()
    console.log(JSON.stringify(result))
}

const findCategoriesByName = async() => {
    const result = await Category.findAll({where: {name: "fruits"}});
    console.log(JSON.stringify(result))
}

// Reterive Items 
const findItems = async() => {
    const result = await Item.findAll();
    console.log(JSON.stringify(result))
}

const findItemsWithCategories = async() => {
    const result = await Item.findAll({include: Category});
    console.log(JSON.stringify(result));
}

const createNewCategory = async() => {
    await Category.create({
        name: "meat"
    });
    findCategories();
}

// Update Category
const updateCategory = async() => {
    await Category.update({name: "meats"}, {where: {id: 9}})
    findCategories();
}

const deleteCategory = async() => {
    await Category.destroy({where: {id: 3}})
    findCategories();
}

deleteCategory()
