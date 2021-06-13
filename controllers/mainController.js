
const { Sequelize} = require ('../database/models');
const db = require('../database/models');
const op = db.Sequelize.Op

const mainController = {
    index: function(req, res){
       // let id = req.params.id;
        db.Productos.findAll()
            .then( data => {
                return res.render('index', { title : 'Productos' , buzos : data});
            })
            .catch(error =>{
                console.log(error);
            })
    }  ,
    search:  function(req, res){
        let buscar = req.query.search;
        db.Productos.findAll({
            where:[
                {nombre_producto:{[op.like]:'%'+buscar+'%'}}
            ]})
            .then (data=> {
                return res.render('/partials/header',{ buzos: data });
            })
            .catch(error=>{
                console.log(error);
            })}
}

module.exports = mainController;
