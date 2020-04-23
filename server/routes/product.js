const express  = require("express")
const router = express.Router()
const cors = require("cors")
const product = require("../model/product")




router.post('/add' , (req,res) =>{

    //console.log("eeeeeeeeeeeeeeee")

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


router.get('/view',(req,res)=>{

   // console.log("dkjcnskjcs")
    product.find()
    .select('productName productPrice productDate')
    .exec()
    .then(result=>{
        console.log("data transfer Success..")
        res.status(200).json(result)
    })
    .catch(error=>{
        console.log(error);
        res.status(500).json({error})
    })
});


router.delete('/delete/:_id',(req,res)=>{
    const id = req.params._id;

    product.remove({_id:id})
    .exec()
    .then(result=>{
        res.status(200).json({ msg:'Delete Successfuly..!'})

    })
    .catch(error=>{
        res.status(500).json({msg:'Deleted Unsuccessful..'})

    })
});


router.get('/edit/:_id' , (req,res)=>{
    const id = req.params._id

    product.findById(id , (err,product)=>{
        res.json(product)
    })
})

router.post('/update/:_id',(req,res)=>{
    const id = req.params._id

    product.findById(id, (err,product)=>{
        if(!product){
            res.status(404).json('Data is not found')
        }else{

            
                product.productName=req.body.productName,
                product.productPrice=req.body.productPrice,
                product.productDate=req.body.productDate,
            

            product.save()
            .then(result=>{ res.json({state:true , msg:"Data updated"})
        //console.log(result)
        })
        .catch(error=>{
        console.log(error)
        res.json({state:false , msg:"Data updated unsuccessfull"})
    })

        }
    })
})


module.exports = router
