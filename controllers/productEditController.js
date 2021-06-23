const db = require('../database/models'); 
const op = db.Sequelize.Op

const prodEditController = {
    show: function(req, res){
        let id = req.params.id;

        db.Buzo.findByPk(id)
            .then(data =>{
                return res.render('productedit', { listaBuzos: data });
            })
            .catch(error =>{
                console.log(error);
            })
        },

          
    search: function(req, res){
        let infoABuscar = req.query.search; //obtenemos la info de la querystring.

        db.Productos.findAll({
            where: [
                { nombre_producto: {[op.like]: '%'+infoABuscar+'%'}}
            ]})
            .then( data => {
                return res.render('search',{listaBuzos: data});
            })
            .catch( error => {
                console.log(error);
            })
    }, 
    create: function(req, res){
        //Mostrar formulario para cargar buzos
        db.Productos.findAll()
            .then( data => {
                return res.render('productedit', {listaBuzos:data});
            })
            .catch(error => {
                console.log(error);
            })
            
    },

}



module.exports = prodEditController;