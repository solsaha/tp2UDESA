const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')

/* GET home page. */
router.get('/', productController.index);
router.get('/id/:id', productController.show); 


module.exports = router;



module.exports = router;