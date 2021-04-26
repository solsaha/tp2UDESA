var express = require('express');
const userController = require('../controllers/userController');
var router = express.Router();


router.get('/', userController.show);

module.exports = router;

