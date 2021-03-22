const e = require("express")
const validator = require("validator")
const modelf = require("../../model/modelf")
 

module.exports = async (value)=>{

    const error = {}
    const {domain,name,stub,code_type,code,principal,contact1,contact2,address,zip,district,about,email,password,re_password,userdata ,template} = value

     // img and cheakbox left
     

    const  findDomain=()=>{
        return  modelf("inst_data").findOne({domain:domain+".instbd.xyz"})
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
        return  modelf("inst_data").findOne({email})
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
        return  modelf("inst_data").findOne({contact1})
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


    //userdata 
    if (!userdata || userdata== undefined || userdata == null) {
        error.userdata = "user in unauthorized"
    }




    //domain
    if(!domain){
        error.domain = "domain is empty"
    }else if( await findDomain()){
        error.domain = "domain is already exist"
    }


    if(!name ){
        error.name = "name is empty"
    }

    if(!template ){
        error.template = "template is empty"
    }


    if(!stub){
        error.stub = "stub is empty"
    }else if(!validator.isNumeric(stub)){
        error.stub = "stub is not numaric"
    }


    if(!code_type || code_type == 0){
        error.code_type = "code type is empty"
    }



    if(!code ){
        error.code = "code is empty"
    }else if(!validator.isNumeric(code)){
        error.code = "code is not numaric"
    }



    if(!principal ){
        error.principal = "principal is empty"
    }




    if(!contact1 ){
        error.contact1 = "contact1 is empty"
    }else if(!validator.isNumeric(contact1)){
        error.contact1 = "contact1 is not numaric"
    }else if( await findNumber()){
        error.contact1 = "contact1 is already exist"
    }




 

    if(!contact2){
        error.contact2 = "contact2 is empty"
    }else if(!validator.isNumeric(contact2)){
        error.contact2 = "contact2 is not valid"
    }
 

    if(!address){
        error.address = "address is empty"
    }

    if(!zip ){
        error.zip = "zip is empty"
    }else if(!validator.isNumeric(zip)){
        error.zip = "zip is not numaric"
    }

    if(!district){
        error.district = "district is empty"
    }

    if(!about){
        error.about = "about is empty"
    }


    if(!email){
        error.email = "email is empty"
    }else if(!validator.isEmail(email)){
        error.email = "email is not valid"
    }else if( await findEmail()){
        error.email = "email is already exist"
    }



     
 
    
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


