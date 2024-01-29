//Homework
const Item = require('../models/itemModel')

exports.getAllItems = async (req, response) => {
    const result = await Item.findAll()
    return response.json(result)
}

exports.getItemById = async(request, response) => {
    let ItemId = request.params.id;
    const result = await Item.findByPk(ItemId)
    if (result != null && result.length > 0) {
        return response.json(result)
    }
    
    response.status(404)
    response.send("Category not found !")
}

exports.addNewItem = async (request, response) => {
    if (!request.body.name || !request.body.price || !request.body.description 
        ||!request.body.category_id) {
        response.status(400)
        return response.send("Bad request")
    }
    const result = await Item.create({
        name: request.body.name,
        price: request.body.price,
        description: request.body.description,
        category_id: request.body.category_id
    });
    response.send(result)
}

exports.updateItemById = async (request, response) => {
    let itemId = request.params.id
    const result = await Item.findByPk(itemId)
    if (result != null && result.length > 0) {
        await Item.update({name: request.body.name, price: request.body.price, 
        description: request.body.description, category_id: request.body.category_id}, {where: {id: itemId}})
        return response.json(result)
    }
    response.status(404)
    response.send("Item not found !")
}

exports.deleteItemById = async (request, response) => {
    let itemId = request.params.id
    const result = await Item.findByPk(itemId)
    if (result != null && result.length > 0) {
        await Item.destroy({where: {id: itemId}})
        return response.json(result)
    }
    response.status(404)
    response.send("Item not found !")
}