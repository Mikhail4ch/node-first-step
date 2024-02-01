const Users = require('../models/loginModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

exports.getFunction = async (request, response) => {
    const result = await Users.findAll()
    return response.json(result)
}

exports.registerFunction = async (request, response) => {
    
    if (!request.body.email ||
        !request.body.password) {
        response.status(400)
        return response.send("Bad request")
    }
    
    const hashedPassword = await bcrypt.hash(request.body.password, 10);
   
    const result = await Users.create({
        email: request.body.email,
        password: hashedPassword
    });
    response.send(result)   
}

exports.loginFunction = async (request, response) => {
    
    if (!request.body.email ||
        !request.body.password) {
        response.status(400)
        return response.send("Bad request")
    }
    
    const result = await Users.findAll({ where: { email: request.body.email } });

    if (result != null && result.length > 0 && await bcrypt.compare(String(request.body.password), String(result.password))) { 
        const token = jwt.sign({ id: result.id, email: result.email }, 'my-secret-key', { expiresIn: '10h' });
        response.status(200)
    return response.send(token)
    }
    response.status(404)
    response.send("Incorrect password")
}
