const e = require("express")
const validator = require("validator")
const modelf = require("../../../../../../../model/modelf")
const bcryptjs = require("bcryptjs")

module.exports = async (req)=>{

    const error = {}

 
    const {old_password , password , re_password } = req.body

    

    if(req.permission.link.writeMap == "all"){
         
       const compare = await modelf("student",null,req.webdata.companycode).findOne({id:req.params.id})
                    .then(async v=>{

                       return await bcryptjs.compare(old_password,v.password)
                        

                    })
                    .catch(e=>{
                        console.log(e);
                    })




        if (!old_password) {
            error.old_password = "old password is empty"
        }else if (!compare ) {
           error.old_password = "old password is invalid"
        }

    }
 
 
    
    if(!password){
        error.password= "password is emty"
    }else if(password.length <6){
        error.password = "password must be about 6 carecter"
    }

    if(!re_password){
        error.re_password= "password is emty"
    }else if(re_password !== password){
        error.re_password = "password not matched"
    }





     
    return{
        isvalid:Object.keys(error).length === 0,
        error
    }

    

}