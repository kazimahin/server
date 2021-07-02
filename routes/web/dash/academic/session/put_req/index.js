

const  modelf = require("../../../../../../model/modelf")
const validator = require("./validator")
const {clientErr, serverErr, success} =require("../../../../../../handler/resHandler")
const bcryptjs = require("bcryptjs")
 

module.exports = async (req,res)=>{
    const {name , start ,end }  = req.body



    


    const reqvalidation = await validator(req)


     if(reqvalidation.isvalid){
     



 
 

        var session = req.webdata.session.map(v=>{ 
            if(v.id == req.params.id){
                return {...v,  ...req.body,  id:v.id}
            }else{
                return v
            }
        }); 
     
    
    
    
    
            modelf("inst_data").updateOne({companycode:req.webdata.companycode},{session})
                                        .then(async v=>{
              
                                            success(res,"session regestered succesfully" ,v)
                                            
                                        })
                                        .catch(e=>serverErr(res,"server error occered" , e))
    
    
                                                             
        


    }else{
        clientErr(res,"incorrect validation",reqvalidation.error)
    }
    



}
