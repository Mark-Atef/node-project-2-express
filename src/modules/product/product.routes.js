const {Router} = require('express')
const router = Router()
const productController = require('./product.controller')

router.get('/', productController.getProducts);


module.exports = router