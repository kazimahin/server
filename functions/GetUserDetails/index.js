const jwt = require("jsonwebtoken")
const modelf = require("../../model/modelf")
const combiner = require("./PermissionCombiner")
const {clientErr,serverErr} = require("../../handler/resHandler")



const superadmin_obj = require("./permissions/superadmin.obj")
const admin_obj = require("./permissions/admin.obj")
const teacher_obj = require("./permissions/teacher.obj")
const student_obj = require("./permissions/student.obj")


module.exports = async (req,res,next)=>{
    try{
        
    const token  =  req.cookies.Authorization.split(" ")[1]   
    const decode =  jwt.verify(token,"mahin")

    var userdata = {}



    const instdata = req.webdata

 
        
        if (decode.catagory == "superadmin") {


           
            // const permission =  combiner(superadmin_obj,admin_obj)
            const permission =  superadmin_obj
            userdata = {email:instdata.email, name:instdata.name, contact:instdata.contact1, catagory:decode.catagory,_id:decode._id, permission }
  



        }else if (decode.catagory == "admin" ){
            // find throw decode.id
        }


        

    

    req.userdata =  userdata
     next()





            

    }catch{
        serverErr(res,"jwt not verify")
    }



}