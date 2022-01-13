//web/dash/

const Router = require("express").Router()

const user = require("./user")
const academic = require("./academic")
const exam = require("./exam")
 

Router.use("/user",user)
Router.use("/academic",academic)
Router.use("/exam",exam)
 
 
module.exports = Router  