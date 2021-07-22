const platos= require('../data/platos_db')


module.exports= {
    index: (req,res) => { /* cuando quiero que haga más de una cosa le agrego llaves  */
        return res.render('index',{
           platos,
        })
    },
    
    detail: (req,res) => {

      /* req.params captura los parámetros que le indiquemos */

      let plato= platos.find(plato => plato.id === +req.params.id);
      /* este plato lo tengo que mandar a la vista detalleMenu */
    
        return res.render('detalleMenu',{
            plato
        })
        }

}