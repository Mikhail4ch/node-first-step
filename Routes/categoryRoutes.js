const express = require("express")
const router = express.Router()
const categoryController = require('../Controllers/categoryController')

const routeMiddleWare = (request, response, next) => {
    if (request.body.role === "admin") {
        next();
    } else {
        response.status(403);
        response.send("You need to be admin to access this method");
    }
}


//Read operations
router.get('/', categoryController.getAllCategories)
router.get('/:id', categoryController.getCategoryById)

//Create operation
router.post('/', routeMiddleWare, categoryController.addNewCategory)

//Update operation
router.put('/:id', routeMiddleWare, categoryController.updateCategoryById);

//Delete operation
router.delete('/:id', routeMiddleWare, categoryController.deleteCategoryById);

router.get('/:id/items', categoryController.getCategoryAllItems)

module.exports = router;