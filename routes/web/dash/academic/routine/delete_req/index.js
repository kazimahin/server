

const  modelf = require("../../../../../../model/modelf")
 const {clientErr, serverErr, success} =require("../../../../../../handler/resHandler")
  

module.exports = async (req,res)=>{
    

 
        modelf("routine",null,req.webdata.companycode).deleteOne({id:req.params.id})
                                    .then(async v=>{
          
                                        success(res,"routine delete succesfully" ,v)
                                        
                                    })
                                    .catch(e=>serverErr(res,"server error occered" , e))


 


}
