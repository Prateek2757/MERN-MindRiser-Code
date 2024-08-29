const mongoose = require('mongoose')
const {Schema} = mongoose

const ProductSchema = new Schema({
   title:{
    type:String,
    required : true
   },
   price:{
    type:String,
    required:true
   },
   description:{
    type:String,
    required:true
   }
})

const Product = mongoose.model('product',ProductSchema)
module.exports = Product