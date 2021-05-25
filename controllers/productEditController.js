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

         
        
        }
        
        

module.exports = prodEditController;