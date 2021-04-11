//com/auth/

const Router = require("express").Router()


const login = require("./login/")
const register = require("./register/")
const verify = require("./verify/")


Router.post("/login",login)
Router.post("/register",register)
Router.post("/verify",verify)

 
module.exports = Router