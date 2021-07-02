 

module.exports =  (req,res,next) =>{
 
    req.subdomain = req.hostname.split('.')[0] 
    req.domain = (process.env.MODE == "DEV") ? req.hostname.split('.')[0] +"."+process.env.DOMAIN :req.hostname

    
    next()



    
}