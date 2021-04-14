let data = require('../data/buzos');
const mainController = {
    index: function(req, res){
        let listaBuzos = data.lista;
        //devuelve la lista de buzos
        res.render('index', {buzos:listaBuzos, title:"todos los buzos"})
    },
    /*show: function(req, res){
        let listaBuzos = data.lista;
        let id = req.params.id
        //de todos los parametros que me llegan (req), solamente necesito el id (:id)
        var buzo = listaBuzos.find(b => b.id==id)
         o (function(b){
            if(b.id==id) 
            return b o
        });
        res.render('detallebuzo', {title: buzo.nombre})
    } */
}

module.exports = mainController;
