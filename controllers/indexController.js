const productos = require('../data/products_db')

module.exports = {
    index : (req,res) => {
        return res.render('index',{
            title : "Crafsty 2.0", 
            productos
        })
    }
}