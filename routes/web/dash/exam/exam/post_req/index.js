

const  modelf = require("../../../../../../model/modelf")
const validator = require("./validator")
const {clientErr, serverErr, success} =require("../../../../../../handler/resHandler")
const bcryptjs = require("bcryptjs")
const RandomId = require("../../../../../../functions/RandomId")
 

module.exports = async (req,res)=>{
    const { password ,method ,multiple} = req.body

 
    



    const reqvalidation = await validator(req)
    console.log(req.body   );

    const id = await RandomId("exam",req.webdata.companycode)     

     if(reqvalidation.isvalid){
        
        if(method == "s"){

            modelf("exam",null,req.webdata.companycode)({...req.body,id}).save()
            .then(async v=>{

                success(res,"Exam saved succesfully" ,v)
                
            })
            .catch(e=>serverErr(res,"server error occered" , e))


        }else{
            let temp = []

   
            multiple.map(async v=>{
                let id = await RandomId("exam",req.webdata.companycode)     
               modelf("exam",null,req.webdata.companycode)({...req.body, ...v, id}).save()
                .then(async v=>{

                     temp.push(v)

                     temp.length == multiple.length &&  success(res,"Exam saved succesfully" ,temp)
                    
                    
                })
                .catch(e=>serverErr(res,"server error occered" , e))

                
            })

            
 
                
         

        }

 

                            
        


    }else{
        clientErr(res,"incorrect validation",reqvalidation.error)
    }
    



}
