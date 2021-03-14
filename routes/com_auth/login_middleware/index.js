 const { clientErr ,serverErr } = require("../../../handler/resHandler")
const loginvalidator = require("./loginValidator")
const jwt = require("jsonwebtoken")
const modelf = require("../../../model/modelf")
const { all } = require("../../auth")

module.exports = async (req,res)=>{
    const { password,email } = req.body
 
    const uservalidation = await loginvalidator(req.body)
    
    if(uservalidation.isvalid){


        // fetch data by using email 
       const alldetails = await  modelf("com_user").findOne({email})
                                            .then(v=>{
                                                return v
                                            })
                                            .catch(e=>{
                                                serverErr(res,"while fetching email",e)
                                            })



        const token = await jwt.sign({email:alldetails.email,name:alldetails.name,phone:alldetails.phone},"mahin",{expiresIn:"2d"})
         
        res.cookie("Authorization","Bearer "+token).status(200).send("cookie set succesfully"+token)
 

    }else{
        clientErr(res,"invalid data ",uservalidation.error)
    }
 
}