const UserData = require("../../../functions/GetUserDetails")
 const modelf = require("../../../model/modelf")
const { clientErr,serverErr,success } = require("../../../handler/resHandler")
const { user } = require("../../../model/schemas")

const sites = async (req,res) =>{

   const userdata = await UserData(req)


   console.log(userdata);

    const findsites = await modelf("inst_data").find({usermail:userdata.email})
    .then(v=>{
         return v
    })
    .catch(e=>{
        serverErr(res,"server error occered",e)
    })


    const customsitedetails =  findsites.map((val)=>{

          return {domain:val.domain,name:val.name,stub:val.stub,code_type:val.code_type,code:val.code,principal:val.principal,contact1:val.contact1,contact2:val.contact2,address:val.address,zip:val.zip,district:val.district,about:val.about,email:val.email }
 
    })
    
    res.send(customsitedetails)

}   


module.exports = sites