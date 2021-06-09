
const { Sequelize} = require ('../database/models');
const db = require('../database/models');
const op = db.Sequelize.Op

const mainController = {
    index: function(req, res){
        let id = req.params.id;
        db.Productos.findAll()
            .then( data => {
                return res.render('index', { title : 'Productos' , listaBuzos: data});
            })
            .catch(error =>{
                console.log(error);
            })
    }   


}

module.exports = mainController;
