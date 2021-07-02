

const  modelf = require("../../../../../../model/modelf")
const validator = require("./validator")
const {clientErr, serverErr, success} =require("../../../../../../handler/resHandler")
  

module.exports = async (req,res)=>{
  



    


    const reqvalidation = await validator(req)


     if(reqvalidation.isvalid){
        

    
    const id =    Math.floor(Math.random() *100000)


    var session = req.webdata.session ? [...req.webdata.session,{...req.body, id:id} ] :[{...req.body, id:id}]
 


        // console.log(session);

        modelf("inst_data").updateOne({companycode:req.webdata.companycode},{session})
                                    .then(async v=>{
          
                                        success(res,"session regestered succesfully" ,v)
                                        
                                    })
                                    .catch(e=>serverErr(res,"server error occered" , e))


                            
        


    }else{
        clientErr(res,"incorrect validation",reqvalidation.error)
    }
    

  
    
   
}
