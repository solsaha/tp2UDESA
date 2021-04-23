let productEditRouter = require ('../app/productedit')

const prodEditController = {
    show: function (req, res){
        return res.render('productedit')
    }, 
   
}
module.exports = prodEditController;