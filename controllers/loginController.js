const bcrypt = require('bcryptjs');
const db = require('../database/models');
const op = db.Sequelize.Op;
const user = db.Usuarios;

let loginController = {
    index: function(req, res){
        //Mostramos el form de login
        return res.render('login');
    },
    login: function(req, res){
        // Buscar el usuario que se quiere loguear.
        user.findOne({
            where: {email: req.body.email},
        })
        .then( user => {
            req.session.user = user;
            console.log('en login controller');
            console.log(req.session.user);

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