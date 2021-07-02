

const  modelf = require("../../../../../../model/modelf")
const validator = require("./validator")
const {clientErr, serverErr, success} =require("../../../../../../handler/resHandler")
const bcryptjs = require("bcryptjs")
const RandomId = require("../../../../../../functions/RandomId")
 

module.exports = async (req,res)=>{
 


    


    const reqvalidation = await validator(req)

    const id = await RandomId("routine",req.webdata.companycode)     

     if(reqvalidation.isvalid){
        

 
        modelf("routine",null,req.webdata.companycode)({...req.body,id}).save()
                                    .then(async v=>{
          
                                        success(res,"routine saved succesfully" ,v)
                                        
                                    })
                                    .catch(e=>serverErr(res,"server error occered" , e))


                            
        


    }else{
        clientErr(res,"incorrect validation",reqvalidation.error)
    }
    



}
