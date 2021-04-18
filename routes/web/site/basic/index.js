
const modelf = require("../../../../model/modelf")
const {serverErr ,clientErr,success} = require("../../../../handler/resHandler")
const routes = require("./route")

module.exports = async (req,res) =>{
    const { domain  } = req.body
    console.log(req.host);
 
                    modelf("inst_data").findOne({domain})
                        .then(val=>{
                             if(  val !== null){
                                                        
                                const customsitedetails =  {domain:val.domain,template:val.template,name:val.name,stub:val.stub,code_type:val.code_type,code:val.code,principal:val.principal,contact1:val.contact1,contact2:val.contact2,address:val.address,zip:val.zip,district:val.district,about:val.about,email:val.email ,routes }
                                success(res,"succesfully find data" ,customsitedetails)
                            }else{
                                clientErr(res,"domain is not regesterd" )
                             }




                        })
                        .catch(e=>{ 
                            serverErr(res,"server error occered",e)
                        })





    
}