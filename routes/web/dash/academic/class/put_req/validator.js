const e = require("express")
const validator = require("validator")
const modelf = require("../../../../../../model/modelf")


module.exports = async (value)=>{

    const error = {}
    const { name, email , phone ,password  } = value

     

 
   

    if(!name){
        error.name = "name is empty"
    } 


    if(!email){
        error.email = "email is empty"
    }else if(!validator.isEmail(email)){
        error.email = "email is not valid"
    } 


    if(!phone){
        error.phone = "phone is empty"
    }else if(!validator.isNumeric(phone)){
        error.phone = "phone is not valid"
    } 
     
 
    

     
    return{
        isvalid:Object.keys(error).length === 0,
        error
    }

    

}