var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainController')

router.get('/', mainController.index);
router.get('/', mainController.search);

module.exports = router;


