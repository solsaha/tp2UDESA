const express = require('express');
const router = express.Router();

const loginController = require('../controllers/loginController')

router.get('/', loginController.index);
router.get('/id/:id', loginController.show); 
  


module.exports = router;