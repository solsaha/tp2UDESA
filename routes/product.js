const express = require('express');
const router = express.Router();
const buzosController = require('../controllers/productController')

router.get('/', buzosController.index);


module.exports = router;