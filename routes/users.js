var express = require('express');
const userController = require('../controllers/userController');
var router = express.Router();

router.get('/', userController.index);
router.get('/', userController.prod);
router.get('/id/:id', userController.show);


module.exports = router;

