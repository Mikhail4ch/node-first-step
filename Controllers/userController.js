const Users = require('../models/loginModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config()

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

    response.status(200);

    const result = await Users.create({
        email: request.body.email,
        password: hashedPassword,
        refreshToken: "not created yet"
    });
}

exports.loginFunction = async (request, response) => {

    if (!request.body.email ||
        !request.body.password) {
        response.status(400)
        return response.send("Bad request")
    }

    const result = await Users.findOne({ where: { email: request.body.email } });

    if (!result) {
        response.status(404)
        response.send("Account doesn't exist")
    }

    if (result) {
        passwordValid = await bcrypt.compare(String(request.body.password), String(result.password))

        if (passwordValid) {
            const accessToken = jwt.sign({ id: result.id, email: result.email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '100s' });
            const refreshToken = jwt.sign({ id: result.id, email: result.email }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '5min' });
            response.status(200);
            await Users.update({ refreshToken:  refreshToken}, {where: { email: request.body.email } })
            response.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 });
            response.json({ accessToken });
        }
        response.status(404)
        response.send("Wrong password")
    }
}


