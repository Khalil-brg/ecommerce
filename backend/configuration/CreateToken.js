const jwt = require("jsonwebtoken");
const secret_key="Bouzellof"
const createToken = (_id)=>{
    return jwt.sign({_id},secret_key,{
        expiresIn:"10d"
    });
};
module.exports = createToken