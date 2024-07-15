const { Router } = require("express");
const categoryController = require("./category.controller");

const router = Router();
router.post("/", categoryController.create)
router.get("/", categoryController.find)
router.delete("/:id", categoryController.remove)
module.exports = {
    CategoryRouter: router
}



// http://localhost:3400/category/6691197d13d27f6c83d23dcd