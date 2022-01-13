//web/dash/exam/

const Router = require("express").Router()

const exam = require("./exam")

 

Router.use("/exam",exam)
 
 
 
module.exports = Router 