const express = require('express')
const router = express.Router()
const bookController = require ('../controller/bookController')

//GET - GET Books
router.get('/' , bookController.GETFunction)

//POST - Create Books
router.post('/' , bookController.POSTFunction )

//PUT - Update Books
router.put('/:id' , bookController.PUTFunction)

//DELETE - Delete Books
router.delete('/:id' , bookController.DELETEFunction)

module.exports = router  