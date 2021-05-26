const db = require('../database/models');

const mainController = {
    index: function(req, res){
        
        db.Productos.findAll()
            .then( data => {
                return res.render('index', { buzos : data })
            })
            .catch(error =>{
                console.log(error);
            })
    }   


}

module.exports = mainController;
