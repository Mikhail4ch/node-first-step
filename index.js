const express = require('express')
const app = express()
const cookieParser = require('cookie-parser');
const port = 7070;
const cors = require('cors')
app.use(express.json());
app.use(cookieParser());
app.use(cors());
const fruitRoutes = require ('./Routes/fruitRoutes.js');
const usersRoutes = require ('./Routes/usersRoutes.js');
const categoryRoutes = require('./Routes/categoryRoutes');
const itemRoutes = require('./Routes/itemRoutes');
const refreshRoutes = require('./Routes/refreshRoutes.js');
const { addNewItem } = require('./Controllers/itemController.js');
const cookieParser = require('cookie-parser');

app.use((request,response,next) => {
    console.log('------------------------------------------')
    console.log('----This runs for every single request----');
    console.log('------------------------------------------')
    next();
})


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


app.get('/item',  (request, response) => {
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
app.use ('/fruits', fruitRoutes)

// For user
app.use('/user', usersRoutes)

// For Categoies
app.use('/categories', categoryRoutes)

// For Items
app.use('/items', itemRoutes)

// For refresh tokem
.app.use ('/refresh', refreshRoutes)

app.listen(port, () => {
    console.log(`App started and listening on port: ${port}`)
});
