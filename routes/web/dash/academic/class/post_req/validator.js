const e = require("express")
const validator = require("validator")
const modelf = require("../../../../../../model/modelf")


module.exports = async (req)=>{

    const data = req.body
    const error = {
        group:data.group.map(v=>{
            return {section:v.section.map(v2=>{return {}})}
        })
    }

    let isvalid = true
     
    console.log(data.group[0].section);



    if(!data.name){
        error.name = "name is empty"
        isvalid = false
    }
    if(!data.teacher){
        error.teacher = "teacher is empty"
        isvalid = false
    }

    if(!data.session){
        error.session = "session is empty"
        isvalid = false

    }

    data.group.map((v,i)=>{

        
        if(!v.teacher){
            error.group[i].teacher = "teacher is empty"
            isvalid = false
        }
        
        if(!v.fees){
            error.group[i].fees = "fees is empty"
            isvalid = false
        }
        
        if(v.subject.length < 2){
            error.group[i].subject = "subject  lenth is short "
            isvalid = false
        }



        v.section.map((v2,i2)=>{
                
            if(!v2.teacher){
                error.group[i].section[i2].teacher = "teacher is empty"
                isvalid = false
            }
            
            
     
            if(!v2.routine){
                error.group[i].section[i2].routine = "routine is empty"
                isvalid = false
            }
            
            


        })


    })

    
   
 

     
    return{
        isvalid,
        error
    }

    

}