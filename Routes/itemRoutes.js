const express = require("express")
const router = express.Router()
const itemController = require('../Controllers/itemController')

const routeMiddleWare = (request, response, next) => {
    if (request.body.role === "admin") {
        next();
    } else {
        response.status(403);
        response.send("You need to be admin to access this method");
    }
}


//Read operations
router.get('/', itemController.getAllItems)

router.get('/:id', itemController.getItemById)

//Create operation
router.post('/',itemController.addNewItem)

//Update operation
router.put('/:id', routeMiddleWare, itemController.updateItemById);

//Delete operation
router.delete('/:id', routeMiddleWare, itemController.deleteItemById)

module.exports = router;