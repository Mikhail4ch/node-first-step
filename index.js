const express = require('express')
const app = express()
const port = 3000;
app.use(express.json());

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


// Read
app.get('/', (request, response) => {
    response.send('Hello World!')
});

app.get('/hello', (request, response) => {
    response.send('Hello World!')
});

app.get('/welcome', (request, response) => {
    response.send('Welcome Back!')
});

// Create
app.post('/login', (request, response) => {
    response.send('Logged In Successfully!')
})

// Update
app.put('/cart', (request, response) => {
    response.send('Item added to cart!')
})


app.get('/items',  (request, response) => {
    response.send('List of Items!')
})

// Delete
app.delete('/item/:id', (request, response) => {
    response.send('Item deleted from the cart!')
})

app.get('/item/:id', (request, response) => {
    response.send(`Returns Item with id: ${request.params.id} !`)
})

app.put('/item/:id', (request, response) => {
    response.send(`Item with id: ${request.params.id} updated !`)
})

app.post('/item/:id', (request, response) => {
    response.send(`Item with id: ${request.params.id} created !`)
})

// For Fruits

//Read operations
app.get('/fruits', (request, response) => {
    response.json(fruits)
})

app.get('/fruits/:id', (request, response) => {
    for (let fruit of fruits) {
        if (fruit.id == request.params.id) {
            response.status(200)
            return response.send(fruit)
        }
    }
    response.status(404)
    response.send("Fruit not found !")
})

//Create operation
app.post('/fruits', (request, response) => {
    if (fruits.length > 0 && fruits.some((f) => f.name == request.body.name)) {
        response.status(409);
        return response.send("Fruite already exists")
    }
    let index = fruits[fruits.length -1].id + 1;
    const newFruit = {
        id: index,
        name: request.body.name
    }
    fruits.push(newFruit)
    response.send(newFruit)
})

//Update operation
app.put('/fruits/:id', (request, response) => {
    for (let fruit of fruits) {
        if (fruit.id == request.params.id) {
            fruit.name = request.body.name;
            response.status(200);
            return response.send("Fruit updated successfully !")
        }
    }
    response.status(404);
    response.send("Fruit not found")
});

//Delete operation 
app.delete('/fruits/:id', (request, response) => {
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
});


app.listen(port, () => {
    console.log(`App startd and listening on port: ${port}`)
});