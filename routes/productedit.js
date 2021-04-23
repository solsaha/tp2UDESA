const express = require('express');
const router = express.Router();
//const productEditController = require('../controllers/productEditController')


router.get('/', function(req, res){
    return res.render('productedit')
})



module.exports = router;