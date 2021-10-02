const mongoose = require("mongoose")

const Schema = mongoose.Schema


const productSchema = new Schema({

    productName :{
        type:String
    },
    productPrice : {
        type:String
    },
    productDate:{
        type:Date
    },
    filepath:{
        type:String
    }

})

const product = module.exports  = mongoose.model("product", productSchema)