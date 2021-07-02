//web/dash/academic

const Router = require("express").Router()

const class_ = require("./class")
const session = require("./session")
const routine = require("./routine")
// const subject = require("./subject")
// const notice = require("./notice")
 

Router.use("/class",class_)
Router.use("/session",session)
Router.use("/routine",routine)
// Router.use("/subject",subject)
// Router.use("/notice",notice)
 
  
module.exports = Router 