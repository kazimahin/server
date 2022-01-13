

const  modelf = require("../../../../../../model/modelf")
const validator = require("./validator")
const {clientErr, serverErr, success} =require("../../../../../../handler/resHandler")
const bcryptjs = require("bcryptjs")
 

module.exports = async (req,res)=>{
    const {name,  email , phone  } = req.body



    


    const reqvalidation = await validator(req)


     if(reqvalidation.isvalid){
        

 
        modelf("class_",null,req.webdata.companycode).updateOne({id:req.params.id},req.body)
            .then(async v=>{

                success(res," updated succesfully" ,v)
                
            })
            .catch(e=>serverErr(res,"server error occered" , e))

                                
        


    }else{
        clientErr(res,"incorrect validation",reqvalidation.error)
    }
    



}
