

const  modelf = require("../../../../../../model/modelf")
const {clientErr, serverErr, success} =require("../../../../../../handler/resHandler")
 
 
const privatedetails=[  ]

module.exports = async (req,res)=>{


               //readmap ,readprivate ,readFull  // writemap

               
               const allExam = await modelf("exam",null,req.webdata.companycode).find(req.params.id&&{id:req.params.id})
               .then(value=>{
                   return value.map(v=>{
                       if (req.permission.link.readFull) {

                           if(req.permission.link.readPrivate ){
                               privatedetails.map(value123=>{
                                   eval("delete v._doc."+value123) 
                               })  
                           } 

                            
                           return v
                           
                       }else{
                           
                       }
                   })
               
               })
               .catch(e=>serverErr(res,"server error occered"))

               allExam && success(res,"data fined succesfully",allExam)



}













