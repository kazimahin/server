//web/auth/

const Router = require("express").Router()
const login = require("./login/")
const verify = require("./verify/")

const userdetails = require("../../../functions/GetUserDetails/")


Router.post("/login",login)
Router.post("/verify",userdetails,verify)

 
module.exports = Router 