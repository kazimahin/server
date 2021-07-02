//const
const Router = require("express").Router()
const subject = require("./subject")
 
 

Router.get("/subject",subject)
 
 
module.exports = Router 