const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')
const multer = require('multer');
const path  = require('path');

var storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, path.join(__dirname, '../public/images/buzos'))
    }, 
        filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    
    }
    });
    
    var upload = multer({ storage: storage });
router.get('/id/:id', productController.show); 
router.get ('/', productController.create);
router.get ('/edit/:id', productController.edit);
router.post ('/edit', productController.editStore);
router.get ('/add', productController.add);
router.post ('/add',upload.single('buzo'), productController.store);
router.post ('/destroy/:id', productController.destroy);


module.exports = router;



