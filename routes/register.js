const express = require('express');
const router = express.Router();
const registerController = require ('../controllers/registerController');
const multer = require('multer');
const path  = require('path');

var storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, path.join(__dirname, '../public/images/avatar'))
    }, 
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    
    }
    });
    
    var upload = multer({ storage: storage });
router.get('/', registerController.index);
router.post('/', upload.single('avatar') , registerController.store);


module.exports = router;