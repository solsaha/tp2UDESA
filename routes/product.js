const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')


router.get('/id/:id', productController.show); 
router.get ('/', productController.create);
router.get ('/edit/:id', productController.edit);
router.post ('/edit', productController.edit);
router.get ('/add', productController.add);
router.post ('/add', productController.store);
router.get ('/', productController.destroy);

module.exports = router;



