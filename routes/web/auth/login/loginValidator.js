const validator = require("validator")
const modelf = require("../../../../model/modelf")
const bcryptjs = require("bcryptjs")
 

module.exports = async (req)=>{

const error = {}




    const {catagory , email ,password } = req.body
 

    
    const finduser = await modelf("inst_data").findOne({_id:req.webdata._id})
                                    .then(async v=>{
                                        console.log(v);
                                        if(v===null){
                                            return {email:false,password:false}
                                        }else{





                                             const comparepwd = await bcryptjs.compare(password,v.password)
                                             if( v.usermail == email && comparepwd ){
                                                return{email:true,password:true , _id:v._id }
                                            }else{
                                                return{email:true,password:false}
                                            }
                                            
                                        }
                                    })
                                    .catch(e=>error.email = "error occered whehn searching")


 


    if(!email){
        error.email="email in empty"
    }else if(!validator.isEmail(email)){
        error.email="email is invalid"
    }else if(!finduser.email){
       error.email="email is not exist"
    }
    if(!catagory){
        error.catagory="catagory in empty"
    }

    if(!password){
        error.password="pwd in empty"
    }else if (!finduser.password){
        error.password="password not matched"
    }


  
      return{
        isvalid:Object.keys(error).length === 0,
        error,
        _id:finduser._id
    }


}