const Users = require('../models/loginModel');
const jwt = require('jsonwebtoken');
require('dotenv').config()

exports.handleRefreshToken = (request, response) => {

    const cookies = request.cookies 

    if (!cookies?.jwt) return send.Status(401);
    console.log (cookies.jwt);
    const refreshToken = cookies.jwt

    const result = Users.findOne({ where: { refreshToken: refreshToken } });

    if (!result) {
        res.status(403)
    }

   jwt.verify (
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    (err, decoded) => {
            if (err || result.id !== decoded.id|| result.email !== decoded.email)
   return res.sendStatus (403);
      const accessToken = jwt.sign ({ id: result.id, email: result.email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '300s' });
      res.json({accessToken})
}
   );
}