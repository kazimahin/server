const jwt = require("jsonwebtoken")

module.exports = UserData =(req)=>{
    console.log(req.cookies)
    const token= req.cookies.Authorization.split(" ")[1]
    
    const decode =  jwt.verify(token,"mahin")

    

    return decode


}