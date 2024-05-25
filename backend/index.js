const express =require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const EmployeModel = require('./models/Employe')
const createToken = require("./configuration/CreateToken");
const cookieParser = require("cookie-parser");
const bcrypt=require("bcryptjs");
const OrderModel = require("./models/Order");
const ProductModel=require("./models/Products");
const cloudinary=require("./outils/Cloudinary");


const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())

mongoose.connect("mongodb+srv://bergheulkhalil:Habibo123@cluster0.nea4ryj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/Employe");
app.post("/login",(req,res)=>{
  const{email,password}=req.body;
  EmployeModel.findOne({email:"halil@gmail.com"})
  .then(admin=>{
    if(admin){
      if(bcrypt.compare(admin.password,password)){
          res.json("admin")
      }else{
          res.json("the password is false")
      }
  }else{
      res.json("No record existed")
  }
  })
})
app.post("/login",(req,res)=>{
    const{email,password}=req.body;
    EmployeModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(bcrypt.compare(user.password,password)){
                res.json("Succes")
            }else{
                res.json("the password is false")
            }
        }else{
            res.json("No record existed")
        }
    })
})
app.post('/cart',(req,res)=>{
  const {order,phone,city}=req.body;
   OrderModel.create({
    order:order,
    phone:phone,
    city:city
  })
});

app.get('/cart',async(req,res)=>{
  try{
    const data=await
    OrderModel.find();
    res.json(data);
  }catch (error){
    res.status(500).json({message:error.message})
  };
  
});
app.get('/dash',async(req,res)=>{
  try{
    const data=await 
    ProductModel.find();
    res.json(data);
  }catch (error){
    res.status(500).json({message:error.message})
  }
});
exports.createProduct =app.post('/dash',async(req,res,next)=>{
  const {pname,price,image}=req.body;
  
  try{
    const result=await cloudinary.uploader.upload(image,{
     folder:"products",
    })
      ProductModel.create({
      pname,
      price,
      image:{
        public_id:result.public_id,
        url:result.secure_url
      },
    });
  }catch(error){
    console.log(error);
    next(error);
  };
}) 
  


app.post('/register',(req,res)=>{
    const { name, email, password } = req.body;
  bcrypt.hash(password, 10, (err, hashPassword) => {
    if (err) {
      console.log(err);
    } else {
      console.log(hashPassword);
      const token=createToken(EmployeModel._id);
       EmployeModel.create({
        name: name,
        email: email,
        password: hashPassword,
        token:token
      })
      if(token){
        res.cookie("token",token,{maxAge:360000})
          res.json({token});
      }else{
        res.status(500).json({error:"Failed to generate a valid token"});
      }
      res.send(hashPassword);
    }
    
})
})

app.listen(8001,()=>{
    console.log("server is runing")
})
