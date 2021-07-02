

const  modelf = require("../../../../../../model/modelf")
const  randomId = require("../../../../../../functions/RandomId")
const validator = require("./validator")
const {clientErr, serverErr, success} =require("../../../../../../handler/resHandler")
const bcryptjs = require("bcryptjs")
 

module.exports = async (req,res)=>{
    const {name,  email , phone ,password ,re_password } = req.body

    const id = await randomId("admin",req.webdata.companycode)     
    // name ,qualification ,birth ,phone ,phone2 ,email ,nid ,nationality ,gender ,religion ,blood ,p_address ,p_city ,p_zip ,c_address ,c_city ,c_zip ,password 
    


    const reqvalidation = await validator(req)





     if(reqvalidation.isvalid){
        

        const bcryptPwd = bcryptjs.hashSync(password,10)

        modelf("admin",null,req.webdata.companycode)({...req.body,password:bcryptPwd,id}).save()
                                    .then(async v=>{
          
                                        success(res,"admin regestered succesfully" ,v)
                                        
                                    })
                                    .catch(e=>serverErr(res,"server error occered" , e))


                            
        


    }else{
        clientErr(res,"incorrect validation",reqvalidation.error)
    }
    



}
