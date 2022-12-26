
const modelf = require("../../model/modelf")
const {serverErr ,clientErr,success} = require("../../handler/resHandler")
const routes = require("./webRoute")

module.exports = async (req,res,next) =>{
 
  
                     modelf("inst_data").findOne({domain:req.domain})
                        .then(val=>{
                             if(  val !== null){
                                 
                                req.webdata =  {...val._doc,routes }
                                next()
                            }else{
                                
                                clientErr(res,"domain is not regesterd" )
                            }




                        })
                        .catch(e=>{   
                            console.log(e);
                            serverErr(res,"server error occered",e)
                        })





    
}