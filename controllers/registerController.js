
const bcrypt = require('bcryptjs');
const db = require('../database/models');
const op = db.Sequelize.Op;
const users = db.Usuarios;
const multer = require('multer');
const path  = require('path');

let registerController = {
    index: function(req, res){
        //Mostrar el formulario de registro
        return res.render('register');
    },
    store: function(req, res){ 
        // Guardar un usuario en la db
        let user = {
           name : req.body.name,
           email: req.body.email,
           password: bcrypt.hashSync(req.body.password, 10), 
       }
       users.create(user)
       .then( user => {
        return res.redirect('login')
       })
       .catch(e => {console.log(e)});

    }
}
 var storage = multer.diskStorage({
    destination: function (req, file, cd){
        cb(null, path.join(__dirname, '../public/images/avatar'))
    }, 
        filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    
    }
    })
    
    var upload = multer({ storage: storage }) 

module.exports = registerController;

