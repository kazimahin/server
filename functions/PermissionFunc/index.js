const {serverErr,clientErr,success} = require('../../handler/resHandler')

module.exports = (first,secound,rw)=>{

   return async (req,res,next)=>{

        var returnvalue={};
        req.userdata.permission.map(v=>{
            if(v.name == first) {
    
                returnvalue.base =  v.permission;
    
                (Array.isArray(v.link) && secound )&& v.link.map(v2=>{
                    if (v2.name == secound) {
                        returnvalue.link = v2.permission;
                    }
                })
                 
                
            } 
    
       })
    
    
       
       if (rw) {



        
            if (rw == "r") {
               
                 if (!returnvalue.link.read) {
                    clientErr(res,"read permission not allow")
 
                }else if(returnvalue.link.readMap == "all"){


                    req.permission = returnvalue
                    next()
                }else if(returnvalue.link.readMap == "own"){

                    req.permission = returnvalue
                    req.userdata._id == req.params.id ? next() : clientErr(res,"its not your account")
                }else if(Array.isArray(returnvalue.link.readMap)){

                    req.permission = returnvalue
                    req.class_check =  true;
                    next()
                }


           }else if(rw == "w"){
            

            

            if (!returnvalue.link.write) {

                clientErr(res,"write permission not allow")

            }else if(returnvalue.link.writeMap == "all"){

                req.permission = returnvalue
                next()
            }else if(returnvalue.link.writeMap == "own"){

                req.permission = returnvalue
                req.userdata._id == req.params.id ? next() : clientErr(res,"its not your account")
            }else if(Array.isArray(returnvalue.link.writeMap)){

                returnvalue.class_check =  true;
                req.permission = returnvalue

                next()
            }


           }else{
            req.permission = returnvalue
            next()
           }



       }
    
    

    }

 
}
