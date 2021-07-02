

const  modelf = require("../../../../../../model/modelf")
const {clientErr, serverErr, success} =require("../../../../../../handler/resHandler")
 
// id,name,email,phone,birth,height,weight,blood,religion,admission,nationality,nid,gender,live,address,parents,password,

const privatedetails=[  ]

module.exports = async (req,res)=>{


 
               
               const allRoutine = await modelf("routine",null,req.webdata.companycode).find(req.params.id&&{id:req.params.id})
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

               allRoutine && success(res,"data fined succesfully",allRoutine)



}













