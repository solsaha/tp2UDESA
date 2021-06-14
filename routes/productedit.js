const express = require('express');
const router = express.Router();
const productEditController = require('../controllers/productEditController')


router.get('/', productEditController.show);
router.get('/search', productEditController.search);
router.get('/', productEditController.create);



module.exports = router;