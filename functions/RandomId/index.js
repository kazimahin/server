
const modelf = require("../../model/modelf")
const {serverErr ,clientErr,success} = require("../../handler/resHandler")
const { find } = require("../GetWebDetails/webRoute")
 
module.exports =  findAny = async(catagory,companycode)=>{

        var num = Math.floor(Math.random() * 1000000)

        var condition = await  modelf(catagory,null,companycode).findOne({id:num})
                       .then(v=>{
                           if(!v || v===null){
                               return false
                           }else{
                             return  true  
                           }
                       })
                       .catch(e=>{
                            return true
                       })
        if( await condition){
            findAny() 
        }else{
            return num
        }

     }



     
     

    
 