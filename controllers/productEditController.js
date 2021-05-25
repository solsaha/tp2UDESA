const db = require('../database/models'); 
const op = db.Sequelize.Op

const prodEditController = {
    show: function(req, res){
        let id = req.params.id;

        db.Buzo.findByPk(id)
            .then(data =>{
                return res.render('productedit', { buzo: data });
            })
            .catch(error =>{
                console.log(error);
            })
        },

          
            search: function(req, res){
                let infoABuscar = req.query.search; //obtenemos la info de la querystring.
        
                db.Buzo.findAll({
                    //SELECT * FROM movies
                    //WHERE title LIKE "%potter%"
                    where: [
                        { title: {[op.like]: '%'+infoABuscar+'%'}}
                    ]})
                    .then( data => {
                        return res.render('productedit',{buzos: data});
                    })
                    .catch( error => {
                        console.log(error);
                    })
            },
            create: function(req, res){
                //Mostrar formulario para cargar buzos
                db.Genre.findAll()
                    .then( data => {
                        return res.render('movieNew', {genres:data});
                    })
                    .catch(error => {
                        console.log(error);
                    })
            },
        
        }
        
        

module.exports = prodEditController;