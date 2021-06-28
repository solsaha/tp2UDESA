const db = require('../database/models');
const op = db.Sequelize.Op;
const user = db.Usuarios;



const productController = {
    show: function (req, res) {
        let id = req.params.id;
       
        db.Productos.findByPk(id,
            {include:[{association: "comentarios"}]},
            )
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

    
    store: function (req, res) {
      
         // agregar buzo nuevo
        let listaBuzos = req.body;
        let buzo = {
            image: req.file.filename,
            nombre_producto: listaBuzos.nombre,
            comentario: listaBuzos.descripcion,
            user_id: req.session.user.id,
        }

        db.Productos.create(buzo)
            .then((buzoCreado) => {

                return res.redirect('/');
            })
            .catch(error => {
                console.log(error);
            })
    },

    editStore: function (req, res) {
        if(req.session.user == undefined){
            return res.redirect('/register');
        } else  {
        // editar el buzo ya cargado en la db
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
    edit: function (req, res) {
        db.Productos.findByPk(req.params.id)
.then((data)=> {
    return res.render('productedit', {listaBuzos: data})
})
    
    },
    
    addComment: function (req,res) {
        const {coment_text} = req.body;
        const comentario = {
                product_id: req.params.id,
                user_id: req.session.user.id,
                coment_text: coment_text
        };
        db.Coments.create(comentario).then((comentarioCreado) => {
            return res.redirect(`/product/id/${req.params.id}`);
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
    add: function (req, res) {
        return res.render('producteditadd')
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



