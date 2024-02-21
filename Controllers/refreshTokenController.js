const Users = require('../models/loginModel');
const jwt = require('jsonwebtoken');
require('dotenv').config()

exports.handleRefreshToken = (request, response) => {

    const cookies = request.cookies 

    if (!cookies?.jwt) return send.Status(401);
    
    console.log (cookies.jwt);
    const refreshToken = cookies.jwt;

    const result = Users.findOne({ where: { refreshToken: refreshToken } });

    if (!result) return
     response.status(403)
    

   jwt.verify (
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    (error, decoded) => { console.log (decoded)
            if (error || result.id != decoded.id || result.email != decoded.email)
   return response.sendStatus (400);
      const accessToken = jwt.sign ({ "id": decoded.id, "email": decoded.email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '100s' });
      response.json({accessToken})
}
   );
}