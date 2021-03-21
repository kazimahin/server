// req (all) in host/auth

const Router = require("express").Router()
 const login_middleware = require("./login_middleware/")
const cheak_middleware = require("./cheak_middleware/")


 Router.post("/login",login_middleware)
Router.post("/cheak",cheak_middleware)

 
module.exports = Router 