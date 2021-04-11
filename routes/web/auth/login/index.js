const { clientErr } = require("../../../../handler/resHandler")
const loginvalidator = require("./loginValidator")
const jwt = require("jsonwebtoken")

module.exports = async (req,res)=>{
    const { password,email,catagory } = req.body
 
    const uservalidation = await loginvalidator(req.body)
    


    console.log({uservalidation,value:req.body});
    if(uservalidation.isvalid){

        const token = await jwt.sign({email,catagory},"mahin",{expiresIn:"2d"})
         
        res.cookie("Authorization","Bearer "+token).status(200).send("cookie set succesfully"+token)

 

    }else{
        clientErr(res,"invalid data ",uservalidation.error)
    }
 
}