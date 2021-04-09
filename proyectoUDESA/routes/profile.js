const express = require('express');
const router = express.Router();

const loginController = require('../controllers/profileController')

router.get('/', profileController.index);
router.get('/id/:id', profileController.show); 
  


module.exports = router;