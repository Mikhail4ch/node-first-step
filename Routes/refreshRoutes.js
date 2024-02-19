const express = require("express")
const router = express.Router()
const userController = require('../Controllers/refreshTokenController')

router.get ('/', refreshTokenController.handleRefreshToken)

module.exports = router;