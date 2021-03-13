const Router = require("express").Router()
const basic = require("./basic/")


Router.post("/",(req,res)=>{
    res.send("from /website")
})

Router.post("/basic",basic)



module.exports = Router