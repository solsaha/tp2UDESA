const db = require('../database/models'); 
const op = db.Sequelize.Op


//let data = require('../data/buzos');


const productController = {
    show: function(req, res){
        let id = req.params.id;

        db.Productos.findByPk(id)
            .then(data =>{
               
                return res.render('detalleproducto', { listaBuzos: data });
            })
            .catch(error =>{
                console.log(error);
            })
        },

        edit: function(req, res){
            return res.render('productedit')
        },

        add: function(req, res){
            return res.render('producteditadd')
        },


    store: function(req, res){
// agregar buzo nuevo
let listaBuzos = req.body;
    let buzo = {            
        image: listaBuzos.image,
        nombre_producto: listaBuzos.nombre,
        comentario: listaBuzos.descripcion,
        user_id: req.session.user.id,
    }
    
    db.Productos.create(buzo)
        .then( (buzoCreado) => {
    
            return res.redirect('/');
        })
        .catch(error => {
            console.log(error);
        })
},
       
    create: function(req, res){
        //Mostrar formulario de carga de buzos nuevos
        db.Productos.findAll()
            .then( data => {
                return res.render('producteditadd', {listaBuzos: data});
            })
            .catch(error => {
                console.log(error);
            })
    },
    destroy: function(req, res){
        let buzoABorrar = req.params.id;
        
        db.Buzo.destroy({
            where: [
                {id : buzoABorrar}
            ]
        })
            .then( () => {
                    return res.redirect('/');
            })
            .catch( error => { 
                console.log(error);
            })
    }


}

module.exports = productController;


  