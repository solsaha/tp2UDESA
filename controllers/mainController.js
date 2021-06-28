
const { Sequelize} = require ('../database/models');
const db = require('../database/models');
const op = db.Sequelize.Op

const mainController = {
    index: function(req, res){
       let id = req.params.id;
        db.Productos.findAll()
            .then( data => {
                return res.render('index', { title : 'Productos' , listaBuzos : data});
            })
            .catch(error =>{
                console.log(error);
            })
    }  ,

    coment: function(req, res){ //descripción de los buzos
        let id = req.params.id;
         db.Productos.findAll()
             .then( data => {
                 return res.render('index', { title : 'Coments' , listaBuzos : data});
             })
             .catch(error =>{
                 console.log(error);
             })
     }  ,

    new: function(req, res){
         
        db.Productos.findAll({
           order: [
               ['created_at', 'DESC']
           ],
        
        })
            .then(data =>{
                return res.render('index', {listaBuzos: data, title: 'Novedades'})
            })
            .catch( error => {
                console.log(error);
            })
    },
    search:  function(req, res){
        let buscar = req.query.search;
        db.Productos.findAll({
            where:[
                {nombre_producto:{[op.like]:'%'+buscar+'%'}}
            ]})
            .then (data=> {
                return res.render('resultados',{ listaBuzos: data });
            })
            .catch(error=>{
                console.log(error);
            })}
}

module.exports = mainController;
