//web/
const express = require("express")
const Router = express.Router()
// const web = require("./web/index")
// const com = require("./com")
 
Router.all('/asdf',(req,res)=>{res.send("hellow")})

// Router.all("/web",web)
// Router.all("/com",com)


module.exports = Router 