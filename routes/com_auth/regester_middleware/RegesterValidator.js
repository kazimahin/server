const e = require("express")
const validator = require("validator")
const modelf = require("../../../model/modelf")


module.exports = async (value)=>{

    const error = {}
    const { name, email , phone ,password ,re_password } = value

     


    const  findDomain=()=>{
        return  modelf("com_user").findOne({domain})
                        .then(v=>{
                            if(!v || v===null){
                                return false
                            }else{
                                return true
                            }
                        })
                        .catch(e=>{
                            
                        })
    }

    const  findEmail=()=>{
        return  modelf("com_user").findOne({email})
                        .then(v=>{
                            if(!v || v===null){
                                return false
                            }else{
                                return true
                            }
                        })
                        .catch(e=>{
                            
                        })
    }

    const  findNumber=()=>{
        return  modelf("com_user").findOne({phone})
                        .then(v=>{
                            console.log(v);
                            if(!v || v===null){
                                return false
                            }else{
                                return true
                            }
                        })
                        .catch(e=>{
                            
                        })
    }


   

    if(!name){
        error.name = "name is empty"
    } 


    if(!email){
        error.email = "email is empty"
    }else if(!validator.isEmail(email)){
        error.email = "email is not valid"
    }else if( await findEmail()){
        error.email = "email is already exist"
    }


    if(!phone){
        error.phone = "phone is empty"
    }else if(!validator.isNumeric(phone)){
        error.phone = "phone is not valid"
    }else if( await findNumber()){
        error.phone = "phone is already exist"
    }
    console.log( await findNumber());
    console.log( phone);

     
 
    
    if(!password){
        error.password= "password is emty"
    }else if(password.length <6){
        error.password = "password must be about 6 carecter"
    }


    if(!re_password){
        error.re_password = 're_password is empty '
    }else if(re_password !== password){
        error.re_password = "password not matched"
    }
    



     
    return{
        isvalid:Object.keys(error).length === 0,
        error
    }

    

}