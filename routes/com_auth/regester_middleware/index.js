// req (post) in host/auth/regester


const  modelf = require("../../../model/modelf")
const regvalidator = require("./RegesterValidator")
const {clientErr,success, serverErr} =require("../../../handler/resHandler")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


module.exports = async (req,res)=>{
    const {name,  email , phone ,password ,re_password } = req.body

    const reqvalidation = await regvalidator(req.body)


     if(reqvalidation.isvalid){


        const bcryptPwd = bcrypt.hashSync(password,10)

        modelf("com_user")({name,email,phone,password:bcryptPwd}).save()
                                    .then(async v=>{
                                        const token =  await jwt.sign({email,name,phone},"mahin",{expiresIn:"2d"})
         
                                        res.cookie("Authorization","Bearer "+token).status(200).send("cookie set succesfully"+token)
                                        
                                    })
                                    .catch(e=>serverErr(res,"server error occered" , e))


                            
        


    }else{
        clientErr(res,"incorrect validation",reqvalidation.error)
    }
    



}
