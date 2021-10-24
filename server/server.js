var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var app = express()
var mongoose = require("mongoose")
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended:false
    })
)

const mongoUrl = 'mongodb://localhost:27017/practice'



var Users = require('./routes/Users')
var product= require('./routes/product')

app.use('/product', product)
app.use('/users' , Users)


app.listen(port,()=>{
    mongoose
    .connect(mongoUrl , {useNewUrlParser:true})
    .then(()=> console.log("MongoBD connected"))
    .catch(err => console.log(err))
    console.log("Server is running on port" + port)
})

