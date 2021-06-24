const bcrypt = require('bcryptjs');
const { Sequelize} = require ('../database/models');
const db = require('../database/models');
const op = db.Sequelize.Op


const usereditController = {
    show: function (req, res){
         res.render('useredit')
    }, 
    editar: function (req, res){
        db.Usuarios.update ({
                nombre : req.body.nombreUsuario,
                email: req.body.mail,
                password: bcrypt.hashSync(req.body.contrasena, 10), 
                fecha_nacimiento: req.body.nacimiento,
        },
        {where:{id:req.session.user.id}})
   }, 
   
}
module.exports = usereditController ;