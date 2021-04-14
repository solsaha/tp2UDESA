let data = require('../data/buzos');
const buzosController = {
  
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


  