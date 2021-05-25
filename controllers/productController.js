const db = require('../database/models'); 
const op = db.Sequelize.Op


//let data = require('../data/buzos');


const productController = {
    show: function(req, res){
        let id = req.params.id;

        db.Buzo.findByPk(id)
            .then(data =>{
                return res.render('index', { buzo: data });
            })
            .catch(error =>{
                console.log(error);
            })
        },

        new: function(req, res){
            //últimas 5 buzos ordenadas según su fecha de lanzamiento. Cada título de buzo deberá ser un hipervínculo para ver el detalle del mismo.
            db.Buzo.findAll({
               order: [
                   ['fecha_creacion', 'DESC']
               ],
               limit: 5,
            })
                .then(data =>{
                    return res.render('new', {Buzos: data, title: 'Nuevos'})
                })
                .catch( error => {
                    console.log(error);
                })
        },

        search: function(req, res){
            let infoABuscar = req.query.search; //obtenemos la info de la querystring
    
            db.Movie.findAll({
                //SELECT * FROM movies
                //WHERE title LIKE "%potter%"
                where: [
                    { title: {[op.like]: '%'+infoABuscar+'%'}}
                ]})
                .then( data => {
                    return res.render('index',{buzos: data});
                })
                .catch( error => {
                    console.log(error);
                })
        },

        create: function(req, res){
            //Mostrar formulario de carga de buzos
            db.Buzo.findAll()
                .then( data => {
                    return res.render('productedit', {Buzo:data});
                })
                .catch(error => {
                    console.log(error);
                })
        },

        store: function(req, res){
            //Método para guardar nueva película.
            //1) Obtener datos del formulario
            let data = req.body;
            
            //2)Crear pelicula nueva.
            let buzo = {
                title: data.id,            
                rating: data. image,
                awards: data.nombre_producto,
                fecha_creacion: data.release_date,
                length: data.comentario,
                genre_id: data.userId
            }
            //3)Guardar película
            db.Buzo.create(buzo)
                .then( (buzoCreado) => {
            //4)Redirección
                    return res.redirect('/');
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

// const productController = {
  
//     show: function(req,res){
//         //devuelve 1 buzo
//         let id = req.params.id
//         let listaBuzos = data.lista;
//         let resultados = [];
//         for(let i=0; i<listaBuzos.length; i++){
//             if(listaBuzos[i].id == id){
//                 resultados.push(listaBuzos[i]);
//                 res.render('detalleproducto', {title: resultados[0].nombre  , buzos: resultados});
//             }
//         }
//         res.render('detalleproducto')
//     }
    

}

module.exports = productController;


  