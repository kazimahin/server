//web/
const Router = require("express").Router()

const auth = require("./auth")
const basic = require("./basic")
 

Router.use("/auth",auth)
Router.post("/basic",basic)
 

module.exports = Router 