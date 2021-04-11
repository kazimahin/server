//web/
const Router = require("express").Router()

const auth = require("./auth")
const basic = require("./basic")
 

// Router.all("/auth",auth)
// Router.post("/basic",basic)
Router.get("/",(req,res)=>res.send("hellow"))


module.exports = Router 