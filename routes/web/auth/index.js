//web/auth/

const Router = require("express").Router()
 const login = require("./login/")
const verify = require("./verify/")


 Router.post("/login",login)
 Router.post("/verify",verify)

 
module.exports = Router 