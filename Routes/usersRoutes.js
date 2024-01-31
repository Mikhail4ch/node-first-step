const express = require("express")
const router = express.Router()
const userController = require('../Controllers/userController')

router.post ('/login', userController.loginFunction)
router.get ('/', userController.getFunction)
router.post ('/register', userController.registerFunction)


module.exports = router;