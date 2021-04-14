const { router } = require('../app')
const loginRouter = require('../routes/register') 
const recursoController = {
    show: function (req, res){
        return res.send(`registrate`)
    }, 
   
}
module.exports = router