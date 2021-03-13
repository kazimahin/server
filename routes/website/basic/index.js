
const modelf = require("../../../model/modelf")
const {serverErr ,clientErr,success} = require("../../../handler/resHandler")


module.exports = async (req,res) =>{
    const { subdomain,domain  } = req.body

     console.log(req.body);

    const val = await modelf("inst_data").findOne({domain})
                        .then(v=>{
                            console.log(v);
                            if(  v !== null){
                                 return v
                            }else{
                                  clientErr(res,"domain is not regesterd" )
                             }




                        })
                        .catch(e=>{
                            serverErr(res,"server error occered",e)
                        })




      const customsitedetails =  {domain:val.domain,template:val.template,name:val.name,stub:val.stub,code_type:val.code_type,code:val.code,principal:val.principal,contact1:val.contact1,contact2:val.contact2,address:val.address,zip:val.zip,district:val.district,about:val.about,email:val.email }
 
 

    success(res,"succesfully find data" ,customsitedetails)

    
}