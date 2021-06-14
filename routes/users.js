var express = require('express');
const userController = require('../controllers/userController');
var router = express.Router();


router.get('/user', userController.show);

module.exports = router;

