

const  modelf = require("../../../../../../../model/modelf")
const validator = require("./validator")
const {clientErr, serverErr, success} =require("../../../../../../../handler/resHandler")
const bcryptjs = require("bcryptjs")
 

module.exports = async (req,res)=>{
    const { old_password , password , re_password } = req.body


    const reqvalidation = await validator(req)

    
    const bcryptPwd = bcryptjs.hashSync(password,10)



   

     if(reqvalidation.isvalid){
        
  
        modelf("parents",null,req.webdata.companycode).updateOne({id:req.params.id},{password:bcryptPwd})
                                    .then(async v=>{
          
                                        success(res," updated succesfully" ,v)
                                        
                                    })
                                    .catch(e=>serverErr(res,"server error occered" , e))


                            
        


    }else{
        clientErr(res,"incorrect validation",reqvalidation.error)
    }
    



}
