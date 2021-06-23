//const { where } = require('sequelize/types');
//const { request } = require('../app');
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
    //let id = req.params.id;
     if(req.session.user == undefined){
         return res.render('login')
     }

     else{
        db.Usuarios.findOne({
            where:[{id:req.session.user.id}],
            include:[
                {association:'buzos'},
                {association:'comentarios'}
            ]
         }) 
        .then(usuarioResultado => {
            console.log(usuarioResultado);
            return res.render('user',{data:usuarioResultado})
        })
        .catch(error=>{
            console.log(error);
        })
    }
     //db.Usuarios.findAll()
      //   .then( data => {
        //     return res.render('user', { title : 'Usuarios' , listaBuzos : data});
      //   })
      //   .catch(error =>{
     //        console.log(error);
     //    })
    }  
}
module.exports = userController ;