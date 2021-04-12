let data = require('../data/buzos');
const buzosController = {
    index: function(req, res){
        let listaBuzos = data.lista;
        //devuelve la lista de buzos
        return res.render('listadoBandas', {bandas:listaBuzos, title:" todos los buzos"})
    },
    

}

module.exports = buzosController;