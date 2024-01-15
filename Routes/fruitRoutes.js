const express = require("express")
const router = express.Router()
const fruitController = require('../Controllers/fruitController')

const routeMiddleWare = (request,response,next) => {
    if (request.body.role === "admin") {
        next ()
    } else {
        response.status(403);
        response.send("You need to be admin to access")
    }
}


//Read operations
router.get('/', fruitController.getAllFruits)

router.get('/:id', fruitController.getFruitById)

//Create operation
router.post('/', routeMiddleWare, fruitController.addNewFruit)

//Update operation
router.put('/:id', routeMiddleWare, fruitController.updateFruitById);

//Delete operation
router.delete('/:id', routeMiddleWare, fruitController.deleteFruitById)

module.exports = router;