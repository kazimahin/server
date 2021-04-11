const validator = require("validator")
const modelf = require("../../../../model/modelf")
const bcryptjs = require("bcryptjs")
 

module.exports = async (value)=>{

const error = {}



    
    const finduser = await modelf("com_user").findOne({email:value.email})
                                    .then(async v=>{
                                        if(v===null){
                                            return {email:false,password:false}
                                        }else{
                                            const comparepwd = await bcryptjs.compare(value.password,v.password)
                                            
                                            if(comparepwd){
                                                return{email:true,password:true}
                                            }else{
                                                return{email:true,password:false}
                                            }
                                            
                                        }
                                    })
                                    .catch(e=>error.email = "error occered whehn searching")

    if(!value.email){
        error.email="email in empty"
    }else if(!validator.isEmail(value.email)){
        error.email="email is invalid"
    }else if(!finduser.email){
       error.email="email is not exist"
    }


    if(!value.password){
        error.password="pwd in empty"
    }else if(value.password.length <6){
        error.password="pwd is short"
    }else if (!finduser.password){
        error.password="password not matched"
    }


    return{
        isvalid:Object.keys(error).length === 0,
        error
    }

    

}