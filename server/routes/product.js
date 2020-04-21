const express  = require("express")
const router = express.Router()
const cors = require("cors")
const product = require("../model/product")



router.post('/add' , (req,res) =>{

    console.log("eeeeeeeeeeeeeeee")

    const  newProduct = new product({
        productName:req.body.productName,
        productPrice:req.body.productPrice,
        productDate:req.body.productDate,
    })
    newProduct.save()
    .then(result=>{
        res.json({state:true , msg:"Data add success"})
        //console.log(result)
    })
    .catch(error=>{
        console.log(error)
        res.json({state:false , msg:"Data added unsuccessfull"})
    })

});



module.exports = router
