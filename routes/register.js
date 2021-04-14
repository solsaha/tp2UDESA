const express = require('express');
const router = express.Router();
router.get('/register', function(req, res){
    return res.send(`Registrate`)
})

  


module.exports = router;