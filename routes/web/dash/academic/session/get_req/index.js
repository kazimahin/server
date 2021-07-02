

const  modelf = require("../../../../../../model/modelf")
 const {clientErr, serverErr, success} =require("../../../../../../handler/resHandler")
  

module.exports = async (req,res)=>{

  var session  

  req.webdata.session.map(v=>
    { v.id == req.params.id && (session = v) }
  );

  var findSession = req.params.id ? session : req.webdata.session



  success(res,"data fined succesfully",findSession)


}
