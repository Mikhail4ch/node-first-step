const fruits = [
    {
        id: 1,
        name: "banana"
    },
    {
        id: 2,
        name: "apple"
    },
    {
        id: 300,
        name: "mango"
    }
]


exports.getAllFruits = (request, response) => {
    response.json(fruits)
}

exports.getFruitById = (request, response) => {
    for (let fruit of fruits) {
        if (fruit.id == request.params.id) {
            response.status(200)
            return response.send(fruit)
        }
    }
    response.status(404)
    response.send("Fruit not found !")
}

exports.addNewFruit = (request, response) => {
    if (fruits.length > 0 && fruits.some((f) => f.name == request.body.name)) {
        response.status(409);
        return response.send("Fruit already exists")
    }
    let index = fruits[fruits.length -1].id + 1;
    const newFruit = {
        id: index,
        name: request.body.name
    }
    fruits.push(newFruit)
    response.send(newFruit)
}

exports.updateFruitById = (request, response) => {
    for (let fruit of fruits) {
        if (fruit.id == request.params.id) {
            fruit.name = request.body.name;
            response.status(200);
            return response.send("Fruit updated successfully !")
        }
    }
    response.status(404);
    response.send("Fruit not found")
}

exports.deleteFruitById = (request, response) => {
    for (let fruit of fruits) {
        if (fruit.id == request.params.id) {
            const bye = fruits.indexOf(fruit);
            fruits.splice(bye,1);
            response.status(200);
            return response.send ("Fruit was deleted")
        }
    }
    response.status(404);
    response.send("Fruit not found to be deleted")
    }