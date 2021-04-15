const express = require('express');
const router = express.Router();
//const loginController = require('../controllers/loginController')

router.get('/', function(req, res){
    return res.render('login')
})

  


module.exports = router;