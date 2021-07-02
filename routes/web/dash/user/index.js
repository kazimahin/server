//web/dash/user/admin

const Router = require("express").Router()

const admin = require("./admin")
const student = require("./student")
const employee = require("./employee")
const parents = require("./parents")
 

Router.use("/admin",admin)
Router.use("/student",student)
Router.use("/employee",employee)
Router.use("/parents",parents)
 
 
module.exports = Router 