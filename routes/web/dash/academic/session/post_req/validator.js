const e = require("express")
const validator = require("validator")
const { find } = require("../../../../../../functions/GetWebDetails/webRoute")
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





    let lastenddate = new Date(req.webdata.session[Object.keys(req.webdata.session).length -1 ] ?  req.webdata.session[Object.keys(req.webdata.session).length -1 ].end : 0) 
    let lastenddatenum = (lastenddate.getFullYear() *12) + lastenddate.getMonth() +1
    

    console.log(startdatenum/12,enddatenum/12,presentdatenum/12 ,lastenddatenum/12);
 


    if(!name){
        error.name = "name is empty"
    } 


    if(!start){
        error.start = "start is empty"
    }else if(lastenddatenum > startdatenum || lastenddatenum == startdatenum  ){
        error.start = "should be bigger then last end date"
    }else if(!startdatenum){
        error.start = "start date is invalid"
    }


    if(!end){
        error.end = "end is empty"
    }else if(enddatenum < startdatenum || enddatenum == startdatenum){
        error.end = "End should be larger then start"
    }else if(!enddatenum){
        error.end = "end date is invalid"
    }
     
 
     


     
    return{
        isvalid:Object.keys(error).length === 0,
        error
    }

    

}