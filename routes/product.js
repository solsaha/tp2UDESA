const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')


router.get('/id/:id', productController.show); 
/* router.get ('/', productController.new); */
router.get ('/', productController.create);
router.get ('/edit', productController.edit);

module.exports = router;



