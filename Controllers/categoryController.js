const Category = require('../models/categoryModel')
const Item = require('../models/itemModel')

exports.getAllCategories = async (req, response) => {
    const result = await Category.findAll()
    response.json(result)
}

exports.getCategoryById = async(request, response) => {
    let categoryId = request.params.id;
    const result = await Category.findByPk(categoryId)
    if (result != null) {
        return response.json(result)
    }
    
    response.status(404)
    response.send("Category not found !")
}

exports.getCategoryByName = async(request, response) => {
    let categoryName = request.params.name;
    const result = await Category.findAll({where: {name: categoryName}});
    if (result != null && result.length > 0) {
        return response.json(result)
    }
    response.status(404)
    response.send("Category not found !")
}

exports.addNewCategory = async (request, response) => {
    if (!request.body.name) {
        response.status(400)
        return response.send("Bad request")
    }
    const result = await Category.create({
        name: request.body.name
    });
    response.send(result)
}

exports.updateCategoryById = async (request, response) => {
    let categoryId = request.params.id
    const result = await Category.findByPk(categoryId)
    if (result != null) {
        await Category.update({name: request.body.name}, {where: {id: categoryId}})
        return response.json(result)
    }
    response.status(404)
    response.send("Category not found !")
}

exports.deleteCategoryById = async (request, response) => {
    let categoryId = request.params.id
    const result = await Category.findByPk(categoryId)
    if (result != null) {
        await Category.destroy({where: {id: categoryId}})
        return response.json(result)
    }
    response.status(404)
    response.send("Category not found !")
}

//Homework

exports.getCategoryAllItems = async (request, response) => {
    let categoryId = request.params.id 
    const result = await Item.findAll({
        where: { category_id: categoryId}})
    
        if (result != null && result.length > 0) {
        return response.json(result)
    }
    response.status(404)
    response.send("Items were not found !")
}