//com/
const Router = require("express").Router()

const auth = require("./auth/")
const makemyweb = require("./makemyapp/")
const basic = require("./basic/")
 
Router.all("/auth",auth)
Router.post("/basic",basic)
Router.post("/makemyweb",makemyweb)


module.exports = Router 