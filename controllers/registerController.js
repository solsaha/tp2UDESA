const bcrypt = require('bcryptjs');
const db = require('../database/models');
const op = db.Sequelize.Op;
const users = db.User;

let registerController = {
    index: function(req, res){
        
        return res.render('register');
    },
    store: function(req, res){ 
        
        let user = {
           name : req.body.name,
           email: req.body.email,
           password: bcrypt.hashSync(req.body.password, 10), 
       }
       users.create(user)
       .then( user => {
        return res.redirect('/login')
       })
       .catch(e => {console.log(e)});

    }
}

module.exports = registerController;