const bcrypt = require('bcryptjs');
const db = require('../database/models');
const op = db.Sequelize.Op;
const users = db.Usuarios;


let registerController = {
    index: function(req, res){
        //Mostrar el formulario de registro
        return res.render('register');
    },
     store: function(req, res){ 
         
        let errors = {}



        if(req.body.email == ""){
            errors.message = "El email es obligatorio";
            res.locals.errors = errors;
            return res.render('register')
        //Chequear que la contraseña no esté vacía    
        } else if(req.body.password == ""){
            errors.message = "La contraseña es obligatoria";
            res.locals.errors = errors;
            return res.render('register')
         //Chequear que repetir contraseña no esté vacío   
        } else {
            //Buscamos un usuario en base al email ingresado.
            users.findOne({
                where: [{email: req.body.email}]
            })
                .then(function(user){
                    //Si find encontró un usuario significa que está en uso ese email por lo que debemos avisarle al usuario que elija otro email
                    if(user != null){
                        errors.message = "El email ya está registrado por favor elija otro.";
                        res.locals.errors = errors;
                        return res.render('register');
                    } else {
                        // Si el email está libre recién ahora podemos guardar un usuario en la db
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