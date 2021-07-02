const e = require("express")
const validator = require("validator")
const modelf = require("../../../../../../model/modelf")


 

// id,name,email,phone,birth,height,weight,blood,religion,admission,nationality,nid,gender,live,address,parents,password,

module.exports = async (req)=>{


    const error = {}
    const {name,birth,height,weight,blood,religion,nationality,gender,live,parents,     email,phone,address,nid,password,re_password,     admission,} = req.body


    const samevalidation ={ name,birth,height,weight,blood,religion,nationality,gender,live,parents,}
 
 
    Object.keys(samevalidation).map((v,index)=>{
        if(!eval(v)){
            eval("error."+v+" = 'cant be empty'") 
        } 
    })
 

    const  findAny = (val)=>{
        
         return  modelf("parents",null,req.webdata.companycode).findOne(val)
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
 
   
 


    if(!email){
        error.email = "email is empty"
    }else if(!validator.isEmail(email)){
        error.email = "email is not valid"
    } else if( await findAny({email})){
        error.email = "email already exist"
    }


    if(!phone){
        
    }else if(!validator.isNumeric(phone)){
        error.phone = "phone is not numaric"
    } else if( await findAny({phone})){
        error.phone = "phone already exist"
    }

 
    if(! nid){
        
    }else if(!validator.isNumeric( nid)){
        error.nid = "id is not numaric"
    }  


    if(live == "s"){
        if(!address){
            error.address = "address is empty"
        }
        
    } 


    


 
    
    if(!password){
        error.password= "password is emty"
    }else if(password.length <6){
        error.password = "password must be about 6 carecter"
    }


    if (!re_password) {
        error.re_password = "re_password is empty"
    } else if (re_password !== password){
        error.re_password = "password not matched"
    }
 



     
    return{
        isvalid:Object.keys(error).length === 0,
        error
    }

    

}