let data = require('../data/buzos');
const mainController = {
    index: function(req, res){
        let listaBuzos = data.lista;
        //devuelve la lista de buzos
        res.render('index', {buzos:listaBuzos, title:"todos los buzos"})
    },
  
}

module.exports = mainController;
