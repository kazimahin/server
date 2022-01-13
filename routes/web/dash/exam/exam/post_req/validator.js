const e = require("express")
const { model } = require("mongoose")
const validator = require("validator")
const { serverErr } = require("../../../../../../handler/resHandler")
const modelf = require("../../../../../../model/modelf")


 

 
module.exports = async (req)=>{

    const {
        for_class,
        for_group,
        for_section,

        method,
        multiple,
        type,

        subject,
        date,
        full_mark,
        examiner,
        marker,


        marks
        

    } = req.body


    const error =( method == "m") ?{  multiple:  await multiple.map(v=>{return {}}) } : {}

    const samevalidation ={ for_class,for_group,method,type}
 
 
    Object.keys(samevalidation).map((v,index)=>{
        if(!eval(v)){
            eval("error."+v+" = 'cant be empty'") 
        } 
    })
 

     
    if(method == "s"){

        if(!date){
            error.date = "date cant be empty"
        }
        if(!full_mark){
            error.full_mark = "full_mark cant be empty"
        }
        if(!examiner){
            error.examiner = "examiner cant be empty"
        }
        if(!marker){
            error.marker = "marker cant be empty"
        }

        if(type == "monthly" || type == "weekly" ){
            if(!for_section){
                error.for_section = "section cant be empty"
            }
            if(! subject){
                error.subject = "subject is empty"
            }
        }else{

            let findSubject = () =>{
                return modelf("exam",null,req.webdata.companycode).findOne({for_class,for_group,type,subject})
                            .then(v=>{
                                
                                if(!v || v===null){
                                    return false
                                }else{
                                    return true
                                }
                            })
                            .catch(e=>{
                               console.log(e);
                            })
            }

            if(! subject){
                error.subject = "subject is empty"
            }else if(  findSubject() ) {
                error.subject = subject+" already exitst"
            }

        }

         

    }else if(method == "m"){
         


        multiple.map(async (v,i)=>{
            
                    if(!v.date){
                        error.multiple[i].date = "date cant be empty"
                    }
                    if(!v.full_mark){
                        error.multiple[i].full_mark = "full_mark cant be empty"
                    }
                    if(!v.examiner){
                        error.multiple[i].examiner = "examiner cant be empty"
                    }
                    if(!v.marker){
                        error.multiple[i].marker = "marker cant be empty"
                    }
            
                    if(type == "monthly" || type == "weekly" ){
                        if(!v.for_section){
                            error.for_section = "section cant be empty"
                        }
                        if(!v.subject){
                            error.multiple[i].subject = "subject cant be empty"
                        }
                    }else{
            
                        let findSubjectm = () =>{
                             
                            return modelf("exam",null,req.webdata.companycode).findOne({for_class,for_group,type,subject:v.subject})
                                        .then(v2=>{
                                             if(!v2 || v2===null){
                                                return false
                                            }else{
                                                return true
                                            }
                                        })
                                        .catch(e=>{
                                            console.log(e);
                                        })
                        }
                        if(!v.subject){
                            error.multiple[i].subject = "subject cant be empty"
                        }else if(   findSubjectm() ) {
                            error.multiple[i].subject = "subject already exitst"
                        }
            
                    }
    
        })

    }



    let  multipleErrorHandler = async()=>{
        
        if(Object.keys(error).length > 1 ){
            return false
        }else{
            let returnValue = true

            await error.multiple.map(v=>{
                Object.keys(v).length !== 0 && (returnValue = false )
            })
            console.log( returnValue);

            return returnValue

        }



    }

     
    console.log(error);
    return{
        isvalid: (method == "s") ? Object.keys(error).length === 0 :await multipleErrorHandler(),
        error 
    }

    

}