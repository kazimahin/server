 

module.exports =  (req,res,next) =>{
    console.log(req.hostname);
    req.subdomain = req.hostname.split('.')[0] 
    req.domain = (process.env.MODE == "DEV") ? req.hostname.split('.')[0] +"."+process.env.DOMAIN :req.hostname

    console.log(req.domain,req.subdomain);
    
    next()



    
}