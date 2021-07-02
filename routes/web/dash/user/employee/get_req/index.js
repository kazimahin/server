

const  modelf = require("../../../../../../model/modelf")
 const {clientErr, serverErr, success} =require("../../../../../../handler/resHandler")
  

// name ,qualification ,birth ,phone ,phone2 ,email ,nid ,nationality ,gender ,religion ,blood ,p_address ,p_city ,p_zip ,c_address ,c_city ,c_zip ,password ,
// subject, designation ,startdate, sallary ,f_name,f_nid,f_nationality ,m_name ,m_nid ,m_nationality   ,f_phone,m_phone
const privatedetails=[ "birth"  ,"phone2" ,"nid" , "p_address", "c_address" ,"c_city" ,"c_zip" ,"startdate" ,"sallary" ,"f_nid" ,"m_nid","f_phone","m_phone" ]

module.exports = async (req,res)=>{


                //readmap ,readprivate ,readFull  // writemap

                
                const allEmployee = await modelf("employee",null,req.webdata.companycode).find(req.params.id&&{id:req.params.id})
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

                allEmployee && success(res,"data fined succesfully",allEmployee)



}













 