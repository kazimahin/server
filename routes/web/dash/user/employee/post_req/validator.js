const e = require("express")
const validator = require("validator")
const modelf = require("../../../../../../model/modelf")


// name ,qualification ,birth ,phone ,phone2 ,email ,nid ,nationality ,gender ,religion ,blood ,p_address ,p_city ,p_zip ,c_address ,c_city ,c_zip ,password ,
//subject, designation ,startdate, sallary ,f_name,f_nid,f_nationality ,m_name ,m_nid ,m_nationality  ,f_phone,m_phone

module.exports = async (req)=>{


    const error = {}
    const { name ,qualification ,birth ,phone ,phone2 ,email ,nid ,nationality ,gender ,religion ,blood ,p_address ,p_city ,p_zip ,c_address ,c_city ,c_zip ,password ,re_password      ,subject,designation ,startdate, sallary ,f_name,f_nid,f_nationality ,m_name ,m_nid ,m_nationality } = req.body


    const samevalidation ={ name ,qualification ,birth  ,nationality ,gender ,religion  ,p_address ,p_city ,p_zip ,c_address ,c_city ,c_zip ,      designation ,startdate, sallary ,  }
 
    //not under validation //f_name,f_nationality ,m_name  ,m_nationality subject, 

    Object.keys(samevalidation).map((v,index)=>{
        if(!eval(v)){
            eval("error."+v+" = 'cant be empty'") 
        } 
    })
 

    const  findAny = (val)=>{
        
         return  modelf("employee",null,req.webdata.companycode).findOne(val)
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
        error.phone = "phone is empty"
    }else if(!validator.isNumeric(phone)){
        error.phone = "phone is not numaric"
    } else if( await findAny({phone})){
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
     
 
    if(! f_nid){
        
    }else if(!validator.isNumeric( f_nid)){
        error.f_nid = " nid is not numaric"
    } else if( await findAny({f_nid})){
        error.f_nid = " nid already exist"
    }
     
 
    if(! m_nid){
        
    }else if(!validator.isNumeric( m_nid)){
        error.m_nid = " nid is not numaric"
    } else if( await findAny({m_nid})){
        error.m_nid = " nid already exist"
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