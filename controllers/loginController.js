const bcrypt = require('bcryptjs');
const db = require('../database/models');
const op = db.Sequelize.Op;
const user = db.Usuarios;

let loginController = {
    index: function(req, res){
         //Control de acceso
         if(req.session.user != undefined){
            return res.redirect('/')
        } else {
        return res.render('login');
        }
    },
    login: function(req, res){
        user.findOne({
            where: [{email: req.body.email}],
        })
        .then( user => {
            let errors = {};
            if(user == null){
                errors.message = "Ingrese el mail correctamente"
                res.locals.errors = errors   
                return res.render('login');
            } else if(bcrypt.compareSync(req.body.password, user.password) == false){
                errors.message = "La contraseña no es correcta"
                res.locals.errors = errors
                return res.render('login');
            } else {
                req.session.user = user;
                console.log(req.session.user);
                
                //recordame => creamos la cookie.
                if(req.body.rememberme != undefined){
                    res.cookie('user_id', user.id, { maxAge: 1000 * 60 * 5})
                }
                return res.redirect('/');        
            }
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