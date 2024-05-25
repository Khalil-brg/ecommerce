const mongoose = require('mongoose')

const ProductSchema=new mongoose.Schema({
    pname:String,
    price:String,
    image:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    }
})
const ProductModel = mongoose.model("products",ProductSchema)
module.exports = ProductModel 