const jwt = require("jsonwebtoken")
const modelf = require("../../model/modelf")
const combiner = require("../PermissionCombiner")
const {clientErr,serverErr} = require("../../handler/resHandler")



const superadmin_obj = require("./permissions/superadmin.obj")
const admin_obj = require("./permissions/admin.obj")
const teacher_obj = require("./permissions/teacher.obj")
const student_obj = require("./permissions/student.obj")


module.exports = async (req,res,next)=>{
    try{
        
    const token =     req.cookies.Authorization.split(" ")[1]   
    const  decode =  jwt.verify(token,"mahin")
    
 
    var return_value = {}
        
        if (decode.catagory == "superadmin") {


            const uservalue = await modelf("inst_data").findOne({email:decode.email})
                    
                    .then( ({email,name,contact1})=>{
                        return {email,name,contact:contact1}
                    })
                    .catch(e=>serverErr(res,"server error occored",e))

            const permission =  superadmin_obj
            return_value = {...uservalue,catagory:decode.catagory,permission}





        }else if (decode.catagory == "admin" ){
            
        }


        

    

    req.uservalue =  return_value
    next()





            

    }catch{
        serverErr(res,"server error occured")
    }



}