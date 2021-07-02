

const  modelf = require("../../../../../../model/modelf")
const  randomId = require("../../../../../../functions/RandomId")

const validator = require("./validator")
const {clientErr, serverErr, success} =require("../../../../../../handler/resHandler")
const bcryptjs = require("bcryptjs")
 

// name ,qualification ,birth ,phone ,phone2 ,email ,nid ,nationality ,gender ,religion ,blood ,p_address ,p_city ,p_zip ,c_address ,c_city ,c_zip ,password ,
// subject, designation ,startdate, sallary ,f_name,f_nid,f_nationality ,m_name ,m_nid ,m_nationality  ,f_phone,m_phone
module.exports = async (req,res)=>{

 

    const { phone ,password   } = req.body



    const id = await randomId("employee",req.webdata.companycode)     



    const reqvalidation = await validator(req)


     if(reqvalidation.isvalid){
        

        const bcryptPwd = bcryptjs.hashSync(password,10)

        modelf("employee",null,req.webdata.companycode)({...req.body,password:bcryptPwd,id}).save()
                                    .then(async v=>{
          
                                        success(res,"employee regestered succesfully" ,v)
                                        
                                    })
                                    .catch(e=>serverErr(res,"server error occered" , e))


                            
        


    }else{
        clientErr(res,"incorrect validation",reqvalidation.error)
    }
    



}
