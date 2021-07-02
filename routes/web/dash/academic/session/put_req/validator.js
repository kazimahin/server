const e = require("express")
const validator = require("validator")
const modelf = require("../../../../../../model/modelf")


module.exports = async (req)=>{

    const error = {}
    const {name , start ,end } = req.body

     
   

    let presentdate = new Date()
    let presentdatenum = (presentdate.getFullYear() *12) + presentdate.getMonth() +1

 
    let startdate =    new Date(start)
    let startdatenum = (startdate.getFullYear() *12) + startdate.getMonth() +1

    let enddate = new Date(end)
    let enddatenum = (enddate.getFullYear() *12) + enddate.getMonth() +1


   

    if(!name){
        error.name = "name is empty"
    } 


    //agerenddate &&  start date < agerenddate ? start date should be greter then previus end date

    if(!start){
        error.start = "start is empty"
    }  
 
 


    // enddate < startdate ? end should be greter then start
    //porerstartdate && enddate > porerstartdate ?end date should be smaller then next start date

    if(!end){
        error.end = "end is empty"
    }else if(enddatenum < startdatenum){
        error.end = "end date should be gretter then start date"
    }
     
 
     


     
    return{
        isvalid:Object.keys(error).length === 0,
        error
    }

    

}