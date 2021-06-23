const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')


router.get('/id/:id', productController.show); 
/* router.get ('/', productController.new); */
router.get ('/', productController.create);
router.get ('/edit', productController.edit);
router.get ('/add', productController.add);
router.get ('/', productController.store); 
router.get ('/', productController.destroy);

module.exports = router;



