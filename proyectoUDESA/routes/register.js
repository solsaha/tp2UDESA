const express = require('express');
const router = express.Router();

const loginController = require('../controllers/registerController')

router.get('/', registerController.index);
router.get('/id/:id', registerController.show); 
  


module.exports = router;