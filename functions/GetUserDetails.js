const jwt = require("jsonwebtoken")
const modelf = require("../model/modelf")
 

 

module.exports = UserData = async (req,res,next)=>{
 
   const token =  req.cookies.Authorization ?   req.cookies.Authorization.split(" ")[1] : clientErr(res,"you dont have token ")
    
   const  decode =  jwt.verify(token,"mahin")
    
   
    

 

    return decode


}