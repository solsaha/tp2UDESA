//const { where } = require('sequelize/types');
//const { request } = require('../app');
const bcrypt = require('bcryptjs');
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
        prod: function(req, res){
            let id = req.params.id;
             db.Productos.findAll()
                 .then( data => {
                     return res.render('index', { title : 'Productos' , listaBuzos : data});
                 })
                 .catch(error =>{
                     console.log(error);
                 })
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
},
        editar: function (req, res){
            console.log(req.body);
            db.Usuarios.update ({
                    nombre : req.body.nombreUsuario,
                    email: req.body.mail,
                    password: bcrypt.hashSync(req.body.contrasena, 10), 
                    fecha_nacimiento: req.body.nacimiento,
            },
            {where:{id:req.session.user.id}})

            .then( user => {
                return res.redirect('/users')
            })
            .catch(e => {console.log(e)});
        },  
        mostrarForm: function (req, res){
            res.render('useredit')
        }, 
        }
 module.exports = userController ;