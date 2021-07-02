

const  modelf = require("../../../../../../model/modelf")
 const {clientErr, serverErr, success} =require("../../../../../../handler/resHandler")
  

module.exports = async (req,res)=>{
    

 

    var session = req.webdata.session
    session.map((v,index)=>{ 
        if(v.id == req.params.id){
            session.splice(index,1)
        }
     }); 
 




        modelf("inst_data").updateOne({companycode:req.webdata.companycode},{session})
                                    .then(async v=>{
          
                                        success(res,"session deleted succesfully" ,v)
                                        
                                    })
                                    .catch(e=>serverErr(res,"server error occered" , e))


                                                         
    
 


}
