const Sequelize = require('sequelize');
const { sequelize, testConnection } = require('./utils/connection')
const Category = require('./models/categoryModel')
const Item = require('./models/itemModel')

testConnection();

//Retreive Categories
const findCategories = async () => {
    const result = await Category.findAll()
    console.log(JSON.stringify(result))
}

const findCategoriesByName = async () => {
    const result = await Category.findAll({ where: { name: "fruits" } });
    console.log(JSON.stringify(result))
}

// Reterive Items 
const findItems = async () => {
    const result = await Item.findAll();
    console.log(JSON.stringify(result))
}

const findItemsWithCategories = async () => {
    const result = await Item.findAll({ include: Category });
    console.log(JSON.stringify(result));
}

const createNewCategory = async () => {
    await Category.create({
        name: "meat"
    });
    findCategories();
}

// Update Category
const updateCategory = async () => {
    await Category.update({ name: "meats" }, { where: { id: 9 } })
    findCategories();
}

const deleteCategory = async () => {
    await Category.destroy({ where: { id: 3 } })
    findCategories();
}

// Homework

//1
const createNewCategory1 = async () => {
    await Category.create({
        name: "meats"
    });
    findCategories();
}

//2
const createPorkItem = async () => {
    await Item.create({
        name: "pork",
        price: "30.50",
        description: "a really good one",
        category_id: 3
    });
    findItems();
}

const createChickenItem = async () => {
    await Item.create({
        name: "chicken",
        price: "27.09",
        description: "a kilogram of high-quality chicken breast",
        category_id: 3
    });
    findItems();
}

//3
const fruits = async () => {
    const result = await Item.findAll({
        where: { category_id: 1 },
        attributes: ['name', 'description'],
    });
    console.log(JSON.stringify(result));
}

//4
const updateItems = async () => {
    await Item.update({ price: 120.99 }, { where: { category_id: 3} })
    findItems();
}
findItems()

//5
const expensiveItems = async () => {
    const result = await Item.findAll({
        where: { price: { [Sequelize.Op.gt]: 20 } },
        attributes: ['name', 'price'],
    });
    console.log(JSON.stringify(result));
}
expensiveItems()

  
  






