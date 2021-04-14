let data = require('../data/buzos');

const productController = {
  
    show: function(req,res){
        //devuelve 1 buzo
        let id = req.params.id
        let listaBuzos = data.lista;
        let resultados = [];
        for(let i=0; i<listaBuzos.length; i++){
            if(listaBuzos[i].id == id){
                resultados.push(listaBuzos[i]);
                res.render('detalleproducto', {title: resultados[0].nombre  , buzos: resultados});
            }
        }
        res.render('detalleproducto')
    }
    

}

module.exports = productController;


  