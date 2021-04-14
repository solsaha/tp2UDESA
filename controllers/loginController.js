const { router } = require('../app')
const loginRouter = require('../routes/login') 

const recursoController = {
    show: function (req, res){
        return res.send(`logueate`)
    }, 
   
}
module.exports = router