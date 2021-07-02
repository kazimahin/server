const e = require("express")
const validator = require("validator")
const modelf = require("../../../../../../model/modelf")


// id      ,f_name,f_email,f_phone,f_occupation,f_company,f_salary, f_nationality,f_nid,
// m_name,m_email,m_phone,m_occupation,m_company,m_salary,m_nationality,m_nid,
// e_name,e_phone,e_address,e_relation,e_email,
// p_address ,p_city,p_zip,c_address,c_city,c_zip,
// primary ,password ,re_password 

module.exports = async (req)=>{


    const error = {}
    const { 
        f_name,f_occupation, f_nationality,                    f_email,f_phone,      f_company,f_salary,f_nid,
        
        m_name,m_occupation,m_nationality,                     m_email,m_phone,      m_company,m_salary,m_nid,

        e_name,e_phone,e_address,e_relation,                                          e_email, // na thakle somossa nai thakle is email

        p_address ,p_city,p_zip,c_address,c_city,c_zip,

        primary,                                            password , re_password
    } = req.body


    const samevalidation ={ 
        f_name,f_occupation,f_nationality, 
        
        m_name,m_occupation,m_nationality, 

        e_name,e_address,e_relation ,e_phone,

        p_address ,p_city,p_zip,c_address,c_city,c_zip,

        primary
    }
 
 
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
                             return  (v.id == req.params.id)? false :  true 
                           }
                       })
                       .catch(e=>{
                           
                       })
   }
   
 
 


    if(!f_email){
        error.f_email = "email is empty"
    }else if(!validator.isEmail(f_email)){
        error.f_email = "email is not valid"
    } else if( await findAny({f_email})){
        error.f_email = "email already exist"
    }

    if(!m_email){
        error.m_email = "email is empty"
    }else if(!validator.isEmail(m_email)){
        error.m_email = "email is not valid"
    } else if( await findAny({m_email})){
        error.m_email = "email already exist"
    }

    if(!f_phone){
        error.f_phone = "phone is empty"
    }else if(!validator.isNumeric(f_phone)){
        error.f_phone = "phone is not numaric"
    } else if( await findAny({f_phone})){
        error.f_phone = "phone already exist"
    }

    if(!m_phone){
        error.m_phone = "phone is empty"
    }else if(!validator.isNumeric(m_phone)){
        error.m_phone = "phone is not numaric"
    } else if( await findAny({m_phone})){
        error.m_phone = "phone already exist"
    }
     


 


    if(! e_email){
        
    }else if(!validator.isEmail( e_email)){
        error.e_email = " email is invalid"
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
     
    if(! f_salary){
        
    }else if(!validator.isNumeric( f_salary)){
        error.f_salary = "salary is not numaric"
    }  
  
    if(! f_salary){
        
    }else if(!validator.isNumeric( f_salary)){
        error.f_salary = "salary is not numaric"
    }  

    if(! m_salary){
        
    }else if(!validator.isNumeric( m_salary)){
        error.m_salary = "salary is not numaric"
    }  





 

     
    return{
        isvalid:Object.keys(error).length === 0,
        error
    }

    

}