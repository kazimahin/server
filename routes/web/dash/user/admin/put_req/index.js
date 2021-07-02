

const  modelf = require("../../../../../../model/modelf")
const validator = require("./validator")
const {clientErr, serverErr, success} =require("../../../../../../handler/resHandler")
const bcryptjs = require("bcryptjs")
 

module.exports = async (req,res)=>{


    // name ,qualification ,birth ,phone ,phone2 ,email ,nid ,nationality ,gender ,religion ,blood ,p_address ,p_city ,p_zip ,c_address ,c_city ,c_zip ,password 

    const reqvalidation = await validator(req)


    req.body.password && delete req.body.password



     if(reqvalidation.isvalid){
        


        modelf("admin",null,req.webdata.companycode).updateOne({id:req.params.id},req.body)
                                    .then(async v=>{
          
                                        success(res,"admin updated succesfully" ,v)
                                        
                                    })
                                    .catch(e=>serverErr(res,"server error occered" , e))


                            


    }else{
        clientErr(res,"incorrect validation",reqvalidation.error)
    }
    



}
