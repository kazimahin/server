
const jwt = require("jsonwebtoken")


module.exports =(req,res,next)=>{

    try{
        const token= req.cookies.Authorization.split(" ")[1]
 
        const decode =  jwt.verify(token,"mahin")
        
         

        res.send({valid:true,auth:"admin"})

    }catch{
        res.status(200).send("token not valid")
     }

     
}


 