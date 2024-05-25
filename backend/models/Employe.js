const mongoose = require('mongoose')

const EmployeSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    token:String

})
const EmployeModel = mongoose.model("employes",EmployeSchema)
module.exports = EmployeModel 