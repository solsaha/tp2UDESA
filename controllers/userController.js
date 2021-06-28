

const bcrypt = require('bcryptjs');
const db = require('../database/models');
const op = db.Sequelize.Op

const userController = {
    show: function (req, res){
        let id= req.params.id
        db.Usuarios.findByPk(id) //busco el usuario en la bd x id
        .then (function(user){ 
            return res.render('user', {profile: user}) //cargo la vista user con la variable profile con el usuario cargado
        })
            .catch( e => {console.log (e)})
        },
        prod: function(req, res){
            let id = req.params.id;
             db.Productos.findAll() //busco los productos de la bd
                 .then( data => {
                     return res.render('index', { title : 'Productos' , listaBuzos : data});
                 })
                 .catch(error =>{
                     console.log(error);
                 })
             },
    
    index: function(req, res){
     if(req.session.user == undefined){ //valido que el usuario este logeado
         return res.render('login')
     }

     else{
        db.Usuarios.findOne({ //obtengo el usuario de la bd junto sus productos y  comentarios asociados
            where:[{id:req.session.user.id}],
            include:[
                {association:'buzos'},
                {association:'comentarios'}
            ]
         }) 
        .then(usuarioResultado => {
            console.log(usuarioResultado);
            return res.render('user',{data:usuarioResultado}) //cargo la vista de usuarios
        })
        .catch(error=>{
            console.log(error);
        })
    }
},
        editar: function (req, res){
            console.log(req.body);
            db.Usuarios.update ({ //actualizo la entidad usuario con los datos del formulario
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
            res.render('useredit')//cargo la vista del perfil
        }, 
        }
 module.exports = userController ;