
const jwt = require("jsonwebtoken")
const UserData = require("../../../functions/GetUserDetails")


module.exports =(req,res,next)=>{

    try{
        const data = UserData(req)

         res.send({valid:true,data})
  
    }catch{
        res.status(500).send("token not valid")
    }
 
     
} 
     