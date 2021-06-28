const bcrypt = require('bcryptjs');
const db = require('../database/models');
const op = db.Sequelize.Op;
const users = db.Usuarios;


let registerController = {
    index: function(req, res){
        return res.render('register');
    },
     store: function(req, res){ 
         
        let errors = {}



        if(req.body.email == ""){
            errors.message = "El email es obligatorio";
            res.locals.errors = errors;
            return res.render('register')  
        } else if(req.body.password == ""){
            errors.message = "La contraseña es obligatoria";
            res.locals.errors = errors;
            return res.render('register') 
        } else {
            users.findOne({
                where: [{email: req.body.email}]
            })
                .then(function(user){
                    if(user != null){
                        errors.message = "El email ya está registrado por favor elija otro.";
                        res.locals.errors = errors;
                        return res.render('register');
                    } else {
                        let user = {
                        nombre : req.body.nombre,
                        email: req.body.email,
                        password: bcrypt.hashSync(req.body.password, 10), 
                        fecha_nacimiento: req.body.nacimiento,
                        edad: req.body.edad, 
                        imagen_perfil:req.file.filename
                        }

                        users.create(user)
                        .then( user => {
                            return res.redirect('login')
                        })
                        .catch(e => {console.log(e)});
                    }
                });
            }
        },

           
    };
 

module.exports = registerController;