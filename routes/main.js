var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainController')
const productController = require('../controllers/productController')

/* GET home page. */
router.get('/', mainController.index);
router.get('/id/:id', productController.show); 


module.exports = router;


/* router.get('/', function(req, res, next) {
    res.render('index', { title: 'Página principal' });
  }); */