//web/dash/

const Router = require("express").Router()

const user = require("./user")
const academic = require("./academic")
 

Router.use("/user",user)
Router.use("/academic",academic)
 
 
module.exports = Router 