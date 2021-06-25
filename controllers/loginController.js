const bcrypt = require('bcryptjs');
const db = require('../database/models');
const op = db.Sequelize.Op;
const user = db.Usuarios;

let loginController = {
    index: function(req, res){
        //Mostramos el form de login
        return res.render('login');
    },
<<<<<<< HEAD
    login: function(req, res){
        // Buscar el usuario que se quiere loguear.
        user.findOne({
            where: {email: req.body.email},
        })
        .then( user => {
            req.session.user = user;
            console.log('en login controller');
            console.log(req.session.user);
=======
  
        login: function(req, res){
            // Buscar el usuario que se quiere loguear.
            user.findOne({
                where: {email: req.body.email},
            })
            .then( user => {
                let errors = {}
                if(user == null){
                    errors.message = "Email incorrecto";
                    res.locals.errors = errors;
                    return res.render('login');
                }
                else if(bcrypt.compareSync(req.body.contrasena, user.password )== false ){
                      //mensaje de error
                    errors.message = "Contraseña incorrecta"
                    res.locals.errors = errors ;
                    return res.redirect('login');
                } else {
                    req.session.user = user;
                    console.log(req.session.user);
                    
                    //Si tildó recordame => creamos la cookie.
                    if(req.body.rememberme != undefined){
                        res.cookie('user_id', user.id, { maxAge: 1000 * 60 * 5})
                    }
                    return res.redirect('/');        
                }
                    
            })
            .catch( e => {console.log(e)})
>>>>>>> 834a94d337a582fe2310e73508dbb7e9b28f19c6

            //Si tildó recordame => creamos la cookie.
            if(req.body.rememberme != undefined){
                res.cookie('user_id', user.id, { maxAge: 1000 * 60 * 5})
            }

            return res.redirect('/');
            
        })
        .catch( e => {console.log(e)})
            

    },
    logout: function(req,res){
        req.session.destroy();
        res.clearCookie('user_id');
        return res.redirect('/')
    }
    
}

module.exports = loginController;