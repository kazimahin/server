
 const  modelf = require("../../../../../../model/modelf")
const validator = require("./validator")
const {clientErr, serverErr, success} =require("../../../../../../handler/resHandler")
const randomId = require("../../../../../../functions/RandomId")

module.exports = async (req,res)=>{
     
 

    const reqvalidation = await validator(req)
    const id = randomId("class_",req.webdata.companycode)


    const finaldata = {
        ...req.body,
        id:await id
    }

     if(reqvalidation.isvalid){
        

        console.log(finaldata);
 
        modelf("class_",null,req.webdata.companycode)(finaldata).save()
                                    .then(async v=>{
          
                                        success(res,"class regestered succesfully" ,v)
                                        
                                    })
                                    .catch(e=>{serverErr(res,"server error occered" , e);console.log(e);})


                            
        


    }else{
        clientErr(res,"incorrect validation",reqvalidation.error)
    }
    



}
