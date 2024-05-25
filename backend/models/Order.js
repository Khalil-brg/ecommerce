const mongoose = require('mongoose')

const OrderSchema=new mongoose.Schema({
    order:String,
    phone:String,
    city:String
})
const OrderModel = mongoose.model("orders",OrderSchema)
module.exports = OrderModel 