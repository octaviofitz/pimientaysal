const platos_db= require('../data/platos_db')


module.exports= {
    index: (req,res) => { /* cuando quiero que haga más de una cosa le agrego llaves  */
        return res.render('index',{
           platos: platos_db
        })
    },
    
    detail: (req,res) => 
         res.render('detalleMenu', { title: 'Express' })

}