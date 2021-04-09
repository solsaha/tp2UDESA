const express = require('express');
const router = express.Router();

const loginController = require('../controllers/editController')

router.get('/', editController.index);
router.get('/id/:id', editController.show); 
  


module.exports = router;