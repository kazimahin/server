const validator = require("validator")
const modelf = require("../../../model/modelf")
const bcrypt = require("bcrypt")
const e = require("express")


module.exports = async (value)=>{

const error = {}




    const catagory = value.catagory
 

    
    const finduser = await modelf("inst_data").findOne({email:value.email})
                                    .then(async v=>{
                                        if(v===null){
                                            return {email:false,password:false}
                                        }else{
                                             const comparepwd = await bcrypt.compare(value.password,v.password)
                                             if(comparepwd){
                                                return{email:true,password:true}
                                            }else{
                                                return{email:true,password:false}
                                            }
                                            
                                        }
                                    })
                                    .catch(e=>error.email = "error occered whehn searching")


    console.log ( await finduser);



    if(!value.email){
        error.email="email in empty"
    }else if(!validator.isEmail(value.email)){
        error.email="email is invalid"
    }else if(!finduser.email){
       error.email="email is not exist"
    }
    if(!value.catagory){
        error.catagory="catagory in empty"
    }

    if(!value.password){
        error.password="pwd in empty"
    }else if (!finduser.password){
        error.password="password not matched"
    }


    return{
        isvalid:Object.keys(error).length === 0,
        error
    }

    

}