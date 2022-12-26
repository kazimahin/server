
 const UserData = require("../../../../functions/JwtDecoder")


module.exports =async (req,res,next)=>{

    try{
        const data = await UserData(req)

         res.send({valid:true,data})

    }catch{
        res.status(500).send("token not valid")
    }

    
    
}


 