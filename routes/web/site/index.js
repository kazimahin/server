//web/site/

const Router = require("express").Router()
 
const basic = require("./basic/")
 

Router.post("/basic",basic)
 
 
module.exports = Router 