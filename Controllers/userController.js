const users = [
    {
        id: 1,
        username: "bsmithw3",
        email: "bsmith@mail.com",
        password: "bsmithw3_2023",
        name: "Brandon Smith"
    },
    {
        id: 2,
        username: "swoow3",
        email: "swoo@mail.com",
        password: "swoo_w3schools",
        name: "Samantha Woo"
    }
]

exports.loginFunction = (request, response) => {
    for (let user of users) {
        if ( user.username == request.body.username && user.password == request.body.password ) {
            response.status(200);
            return response.send("Login successful!")
        }
    }
    response.status(404);
    response.send("Login failed")
}

exports.registerFunction = (request, response) => {
const newUser = {
    id: request.body.id,
    username: request.body.username,
    email: request.body.email,
    password: request.body.password,
    name: request.body.name
}
if (newUser.id == null || newUser.username == null || newUser.email == null ||
     newUser.password == null || newUser.name == null) {
    response.status(409);
    return response.send("Registration is not completed")
}
users.push(newUser)
response.send("Registration is completed")
}