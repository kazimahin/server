 
 const UserData = require("../../../functions/JwtDecoder")
const validator = require("./makemyapp.validator")
const modelf = require("../../../model/modelf")
const { clientErr,serverErr,success } = require("../../../handler/resHandler")
const bcryptjs = require("bcryptjs")

module.exports =  async (req,res)=>{


    const {domain,name,stub,code_type,code,principal,contact1,contact2,address,zip,district,about,email,password,re_password,template} = req.body



    const userdata = UserData(req)
    const dataForValidator = {
        ...req.body,
        userdata
    }

    const validation = await  validator(dataForValidator)

 
    const findnumfunc= ()=>{   

        const randominstid = Math.floor((Math.random() * 10000000) + 1);
              modelf("inst_data").findOne({companycode:randominstid})
                    .then(v=>{
                         if(!v || v===null){
                             return
                        }else{
                            findnumfunc()
                        }
                    })
                    .catch(e=>{
                         return true
                    })
            return randominstid
     }

 
    const companycode = await findnumfunc()

 
     if(validation.isvalid){

        const bcryptPwd = bcryptjs.hashSync(password,10)
        modelf("inst_data")({domain:domain+".instbd.xyz",name,stub,code_type,code,principal,contact1,contact2,address,zip,district,about,email,template,password:bcryptPwd,companycode,usermail:userdata.email}).save()
                    .then(  v=>{
                        success(res,"data saved ",v)

                    })
                    .catch(e=>serverErr(res,"server error occered" , e))
    }else{
        clientErr(res,"incorrect validation",validation)
    }
    



   

}


