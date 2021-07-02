

const  modelf = require("../../../../../../model/modelf")
 const {clientErr, serverErr, success} =require("../../../../../../handler/resHandler")
  



// id      ,f_name,f_email,f_phone,f_occupation,f_company,f_salary, f_nationality,f_nid,
// m_name,m_email,m_phone,m_occupation,m_company,m_salary,m_nationality,m_nid,
// e_name,e_phone,e_address,e_relation,e_email,
// p_address ,p_city,p_zip,c_address,c_city,c_zip,
// primary ,password ,re_password 




module.exports = async (req,res)=>{


    const privatedetails=[
    
        "f_email"  ,"f_phone" ,"f_occupation" , "f_company", "f_salary" ,"f_nid" ,
        "m_email"  ,"m_phone" ,"m_occupation" , "m_company", "m_salary" ,"m_nid" ,
        "e_name",'e_phone','e_address','e_relation','e_email',
         
         
    
    ]
    

                //readmap ,readprivate ,readFull  // writemap

                
                const allParents = await modelf("parents",null,req.webdata.companycode).find(req.params.id&&{id:req.params.id})
                .then(value=>{
                    return value.map(v=>{
                        if (req.permission.link.readFull) {

                            if(req.permission.link.readPrivate ){

                                let primary = v.primary
                                
                                if(primary == "f"){
                                    privatedetails.splice(0,2)      
                                }else if(primary == "m"){
                                    privatedetails.splice(6,2)   
                                }else if(primary == "e"){
                                    privatedetails.splice(13,1)   
                                }

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

                allParents && success(res,"data fined succesfully",allParents)



}













 