const db = require('../database/models');
const op = db.Sequelize.Op


//let data = require('../data/buzos');


const productController = {
    show: function (req, res) {
        let id = req.params.id;
        db.Productos.findByPk(id)
     
            .then(data => {
                console.log(data)
                return res.render('detalleproducto', {
                    listaBuzos: data
                });
            })
            .catch(error => {
                console.log(error);
            })
    },
 /*    comentario: 
    unction (req, res) {
  
        db.Productos.findOne(
            {include:[{association: "comentarios"}]},
            {where:[
                {id:req.params.id}
            ]},
            
            )  */
    
    edit: function (req, res) {
        db.Productos.findByPk(req.params.id)
.then((data)=> {
    return res.render('productedit', {listaBuzos: data})
})
    
    },

    add: function (req, res) {
        return res.render('producteditadd')
    },

    editStore: function (req, res) {
        if(req.session.user == undefined){
            return res.redirect('/register');
        } else  {
        // agregar buzo nuevo
        let listaBuzos = req.body;
        let buzo = {
            image: listaBuzos.image,
            nombre_producto: listaBuzos.nombre,
            comentario: listaBuzos.descripcion,
            user_id: req.session.user.id,
        } 
    
        db.Productos.update(buzo, {
                where: {
                    id: req.body.id
                }
            })
            .then(() => {

                return res.redirect('/');
            })
            .catch(error => {
                console.log(error);
            })
        }
    },
    store: function (req, res) {
        // agregar buzo nuevo
        let listaBuzos = req.body;
        let buzo = {
            image: req.file.filename,
            nombre_producto: listaBuzos.nombre,
            comentario: listaBuzos.descripcion,
        }

        db.Productos.create(buzo)
            .then((buzoCreado) => {

                return res.redirect('/');
            })
            .catch(error => {
                console.log(error);
            })
    },

    create: function (req, res) {
        if(req.session.user == undefined){
            return res.redirect('/register');
        } else {
        //Mostrar formulario de carga de buzos nuevos
        db.Productos.findAll()
            .then(data => {return res.render('producteditadd', {listaBuzos: data});
            })
            .catch(error => {
                console.log(error);
            })
        }
    },
    destroy: function (req, res) {
        let buzoBorrar = req.params.id;
      
        db.Productos.destroy({
                where: [{
                    id: buzoBorrar 
                }]
            })
            .then(() => {
                return res.redirect('/');
            })
            .catch(error => {
                console.log(error);
            })
    }


}

module.exports = productController;



