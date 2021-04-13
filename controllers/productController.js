let data = require('../data/buzos');
const buzosController = {
    index: function(req, res){
        let listaBuzos = data.lista;
        //devuelve la lista de buzos
        return res.render('listadoBandas', {bandas:listaBuzos, title:" todos los buzos"})
    },
    show: function(req,res){
        //devuelve 1 buzo
        let id = req.params.id
        let listaBuzos = data.lista;
        let resultados = {}
        for(let i=0; i<listaBuzos.length; i++){
            if(listaBuzos[i].id == id){
                resultados = listaBuzos[i];
                return res.render('detalleproducto', {buzos: resultados});
            }
        }
        return res.render('detalleproducto')
    }
    

}

module.exports = buzosController;


  