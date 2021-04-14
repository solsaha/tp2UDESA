const express = require('express');
const router = express.Router();
const buzosController = require('../controllers/productController')

router.get('/product', buzosController.index, function(req, res){ 
return res.send (`Estás viendo nuestros buzos`)
})


module.exports = router;