var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Página principal' });
});

router.get('/', mainController.index);
// router.get('/id/:id', mainController.show); 

module.exports = router;
