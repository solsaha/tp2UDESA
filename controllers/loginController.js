let loginRouter = require ('../app/loginRouter')

const logController = {
    show: function (req, res){
        return res.render('login')
    }, 
   
}
module.exports = logController;