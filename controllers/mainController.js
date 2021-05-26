//const productos = requiere('../data/buzos');
const { Sequelize} = require ('../database/models');
const db = require('../database/models');
const op = db.Sequelize.Op

const mainController = {
    index: function(req, res){
        let id = req.params.id;
        db.productos.findAll()
            .then( data => {
                return res.render('main', { title : 'Productos' , listaBuzos: data});
            })
            .catch(error =>{
                console.log(error);
            })
    }   


}

module.exports = mainController;
