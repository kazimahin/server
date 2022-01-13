const e = require("express")
const validator = require("validator")
const modelf = require("../../../../../../model/modelf")


 

// id,name,email,phone,birth,height,weight,blood,religion,admission,nationality,nid,gender,live,address,parents,password,

module.exports = async (req)=>{


    const error = {}
    const {
        for_class,
        for_group,
        for_section,

        type,

        subject,
        date,
        full_mark,
        examiner,
        marker,

        marks
        

    } = req.body


    const samevalidation ={ for_class,for_group,for_section,type,subject,date,full_mark,examiner,marker}
 
 
    Object.keys(samevalidation).map((v,index)=>{
        if(!eval(v)){
            eval("error."+v+" = 'cant be empty'") 
        } 
    })
 

     


     
    return{
        isvalid:Object.keys(error).length === 0,
        error 
    }

    

}