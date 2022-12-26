
const {serverErr ,clientErr,success} = require("../../../../handler/resHandler")
 
module.exports = async (req,res) =>{

    console.log(req.webdata);
    const webdata = req.webdata
    delete webdata.password

    success(res,"succesfully find data" ,webdata)
                           




    
}