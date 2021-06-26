var express = require('express');
const userController = require('../controllers/userController');
var router = express.Router();

router.get('/', userController.index);
router.get('/', userController.prod);
router.get('/id/:id', userController.show);
router.get('/edit', userController.mostrarForm);
router.post('/edit', userController.editar)


module.exports = router;

