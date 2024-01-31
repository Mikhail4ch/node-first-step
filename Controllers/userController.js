const Users = require('../models/loginModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

exports.getFunction = async (request, response) => {
    const result = await Users.findAll()
    return response.json(result)
}

exports.registerFunction = async (request, response) => {
    const hashedPassword = bcrypt.hash(request.body.password, 10);
    if (!request.body.email ||
        !request.body.password) {
        response.status(400)
        return response.send("Bad request")
    }
    const result = await Users.create({
        email: request.body.email,
        password: hashedPassword
    });
    response.send(result)
}

exports.loginFunction = (request, response) => {

    for (let user of Users) {
        if (user.email == request.body.email && bcrypt.compare(request.body.password, user.password)) {
            const token = jwt.sign({ id: user.id, email: user.email }, 'my-secret-key', { expiresIn: '10h' });
            res.status(200).send({ token });
        }
    }
    response.status(404);
    response.send("Login failed")
}


