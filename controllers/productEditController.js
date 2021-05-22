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

            recomended: function(req, res){
                // Deberá mostrar los buzos cuya puntuación sea mayor o igual a 8. Cada buzo deberá ser un hipervínculo para ver el detalle del mismo.
        
                db.Movie.findAll({
                    where: [
                        { rating: {[op.gte]: 8}}
                    ],
                    order:[
                        ['rating', 'DESC']
                    ]
                })
                    .then(data =>{
                        return res.render('new', { movies : data, title: 'Recomendadas'})
                    })
                    .catch( error => {
                        console.log(error);
                    })
            },
            recomended: function(req, res){
                // Deberá mostrar las películas cuyo rating sea mayor o igual a 8. Cada título de película deberá ser un hipervínculo para ver el detalle de la misma.
        
                db.Movie.findAll({
                    where: [
                        { rating: {[op.gte]: 8}}
                    ],
                    order:[
                        ['rating', 'DESC']
                    ]
                })
                    .then(data =>{
                        return res.render('new', { movies : data, title: 'Recomendadas'})
                    })
                    .catch( error => {
                        console.log(error);
                    })
            }  
        
        
        }
        
        

module.exports = prodEditController;