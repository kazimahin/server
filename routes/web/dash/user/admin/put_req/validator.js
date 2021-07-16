const e = require("express")
const validator = require("validator")
const modelf = require("../../../../../../model/modelf")


module.exports = async (req)=>{

    // name ,qualification ,birth ,phone ,phone2 ,email ,nid ,nationality ,gender ,religion ,blood ,p_address ,p_city ,p_zip ,c_address ,c_city ,c_zip ,password 

    const error = {}
    const { name ,qualification ,birth ,phone ,phone2 ,email ,nid ,nationality ,gender ,religion ,blood ,p_address ,p_city ,p_zip ,c_address ,c_city ,c_zip } = req.body


    const samevalidation ={ name ,qualification ,birth  ,nationality ,gender ,religion  ,p_address ,p_city ,p_zip ,c_address ,c_city ,c_zip  }
 



    Object.keys(samevalidation).map((v)=>{
        console.log(v);
        if(!eval(v)){
            eval("error."+v+" = 'field can't be empty'") 
        } 
    })
    

      
    const  findAny = (val)=>{
        
        return  modelf("admin",null,req.webdata.companycode).findOne(val)
                       .then(v=>{
                           if(!v || v===null){
                               return false
                           }else{
                             return  (v.id == req.params.id)? false :  true 
                           }
                       })
                       .catch(e=>{
                           
                       })
   }

  
 
    if(!email){
        error.email = "email is empty"
    }else if(!validator.isEmail(email)){
        error.email = "email is not valid"
    }else if( await findAny({email})){
            error.email = "email already exist"
    }


    if(!phone){
        error.phone = "phone is empty"
    }else if(!validator.isNumeric(phone)){
        error.phone = "phone is not valid"
    }else if( await findAny({phone})){
        error.phone = "phone already exist"
    }
    
        
 
    if(! phone2){
        
    }else if(!validator.isNumeric( phone2)){
        error.phone2 = " phone2 is not numaric"
    } else if( await findAny({phone2})){
        error.phone2 = " phone2 already exist"
    }
    

    if(! nid){
        
    }else if(!validator.isNumeric( nid)){
        error.nid = " nid is not numaric"
    } else if( await findAny({nid})){
        error.nid = " nid already exist"
    }
    

     
    return{
        isvalid:Object.keys(error).length === 0,
        error
    }

    

}