

const  modelf = require("../../../../../../model/modelf")
 const {clientErr, serverErr, success} =require("../../../../../../handler/resHandler")
  
    // name ,qualification ,birth ,phone ,phone2 ,email ,nid ,nationality ,gender ,religion ,blood ,p_address ,p_city ,p_zip ,c_address ,c_city ,c_zip ,password 


     const privatedetails=[ "birth"  ,"phone2" ,"nid" , "p_address", "c_address" ,"c_city" ,"c_zip"  ]
module.exports = async (req,res)=>{


  
     const allAdmin = await modelf("admin",null,req.webdata.companycode).find(req.params.id&&{id:req.params.id})
                                .then(value=>{
                                     return value.map(v=>{
                                        if (req.permission.link.readFull) {

                                            if(req.permission.link.readPrivate ){
                                                privatedetails.map(value123=>{
                                                    eval("delete v._doc."+value123) 
                                                })  
                                            }

                                            delete v._doc.password
                                            return v
                                             
                                        }else{
                                            
                                         }
                                    })
                                   
                                })
                                .catch(e=>serverErr(res,"server error occered"))

    allAdmin && success(res,"data fined succesfully",allAdmin)


}
