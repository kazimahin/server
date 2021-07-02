

const  modelf = require("../../../../../../model/modelf")
const  randomId = require("../../../../../../functions/RandomId")

const validator = require("./validator")
const {clientErr, serverErr, success} =require("../../../../../../handler/resHandler")
const bcryptjs = require("bcryptjs")
 


// id      ,f_name,f_email,f_phone,f_occupation,f_company,f_salary, f_nationality,f_nid,
// m_name,m_email,m_phone,m_occupation,m_company,m_salary,m_nationality,m_nid,
// e_name,e_phone,e_address,e_relation,e_email,
// p_address ,p_city,p_zip,c_address,c_city,c_zip,
// primary ,password ,re_password 

module.exports = async (req,res)=>{

 

    const { password   } = req.body



    const id = await randomId("parents",req.webdata.companycode)     



    const reqvalidation = await validator(req)


     if(reqvalidation.isvalid){
        

        const bcryptPwd = bcryptjs.hashSync(password,10)

        modelf("parents",null,req.webdata.companycode)({...req.body,password:bcryptPwd,id}).save()
                                    .then(async v=>{
          
                                        success(res,"parents regestered succesfully" ,v)
                                        
                                    })
                                    .catch(e=>serverErr(res,"server error occered" , e))


                            
        


    }else{
        clientErr(res,"incorrect validation",reqvalidation.error)
    }
    



}
