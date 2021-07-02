

const  modelf = require("../../../../../../model/modelf")
const validator = require("./validator")
const {clientErr, serverErr, success} =require("../../../../../../handler/resHandler")
const bcryptjs = require("bcryptjs")
const RandomId = require("../../../../../../functions/RandomId")
 

module.exports = async (req,res)=>{
    const { password  } = req.body



    


    const reqvalidation = await validator(req)

    const id = await RandomId("student",req.webdata.companycode)     

     if(reqvalidation.isvalid){
        

        const bcryptPwd = bcryptjs.hashSync(password,10)

        modelf("student",null,req.webdata.companycode)({...req.body,password:bcryptPwd,id}).save()
                                    .then(async v=>{
          
                                        success(res,"student regestered succesfully" ,v)
                                        
                                    })
                                    .catch(e=>serverErr(res,"server error occered" , e))


                            
        


    }else{
        clientErr(res,"incorrect validation",reqvalidation.error)
    }
    



}
