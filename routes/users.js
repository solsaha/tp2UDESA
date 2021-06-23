var express = require('express');
const userController = require('../controllers/userController');
var router = express.Router();


router.get('/users', userController.show);
router.get('/users', userController.index);

module.exports = router;

