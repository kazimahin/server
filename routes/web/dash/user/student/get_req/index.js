

const  modelf = require("../../../../../../model/modelf")
const {clientErr, serverErr, success} =require("../../../../../../handler/resHandler")
 
// id,name,email,phone,birth,height,weight,blood,religion,admission,nationality,nid,gender,live,address,parents,password,

const privatedetails=[ "nid" ]

module.exports = async (req,res)=>{


               //readmap ,readprivate ,readFull  // writemap

               
               const allStudent = await modelf("student",null,req.webdata.companycode).find(req.params.id&&{id:req.params.id})
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

               allStudent && success(res,"data fined succesfully",allStudent)



}













