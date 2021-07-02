
 const UserData = require("../../../../functions/JwtDecoder")


module.exports =(req,res,next)=>{

    try{
        const data = UserData(req)

         res.send({valid:true,data})

    }catch{
        res.status(500).send("token not valid")
    }

    
    
}


 