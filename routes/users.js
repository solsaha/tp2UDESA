var express = require('express');
const userController = require('../controllers/userController');
var router = express.Router();

router.get('/', userController.index);
router.get('/id/:id', userController.show);


module.exports = router;

