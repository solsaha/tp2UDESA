const express = require('express');
const router = express.Router();

const loginController = require('../controllers/productController')

router.get('/', productController.index);
router.get('/id/:id', productController.show); 
  


module.exports = router;