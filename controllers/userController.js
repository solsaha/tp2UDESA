const { Sequelize} = require ('../database/models');
const db = require('../database/models');
const op = db.Sequelize.Op

const userController = {
    show: function (req, res){
        let id= req.params.id
        db.Usuarios.findByPk(id)
        .then (function(user){
            return res.render('user', {profile: user}) 
        })
            .catch( e => {console.log (e)})
        },
    
    index: function(req, res){
    let id = req.params.id;
     db.Usuarios.findAll()
         .then( data => {
             return res.render('user', { title : 'Usuarios' , listaBuzos : data});
         })
         .catch(error =>{
             console.log(error);
         })
    }  ,
}
module.exports = userController ;