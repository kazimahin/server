//com/
const Router = require("express").Router()

const auth = require("./auth/")
const makemyweb = require("./makemyapp/")
const instdata = require("./instdata")
 
Router.use("/auth",auth)
Router.post("/instdata",instdata)
Router.post("/makemyweb",makemyweb)


module.exports = Router 