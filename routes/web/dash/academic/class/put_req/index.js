

const  modelf = require("../../../../../../model/modelf")
const validator = require("./validator")
const {clientErr, serverErr, success} =require("../../../../../../handler/resHandler")
const bcryptjs = require("bcryptjs")
 

module.exports = async (req,res)=>{
    const {name,  email , phone  } = req.body



    


    const reqvalidation = await validator(req.body)


     if(reqvalidation.isvalid){
        

 
        modelf("admin",null,req.webdata.companycode).updateOne({_id:req.params.id},req.body, (res1,error)=>{success(res,"updated",{res1,error})})
                                    // .then(async v=>{
          
                                    //     success(res,"admin updated succesfully" ,v)
                                        
                                    // })
                                    // .catch(e=>serverErr(res,"server error occered" , e))


                            
        


    }else{
        clientErr(res,"incorrect validation",reqvalidation.error)
    }
    



}
