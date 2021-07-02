const e = require("express")
const validator = require("validator")
const modelf = require("../../../../../../model/modelf")


 

 
module.exports = async (req)=>{


    const error = {}
    const {name,value} = req.body

 
   
 


    if(!name){
        error.name = "name is empty"
    } 

    if(!value){
        error.value = "value is empty"
    } 

 

     
    return{
        isvalid:Object.keys(error).length === 0,
        error
    }

    

}