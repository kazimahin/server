//Routes/
const express = require("express")
const Router = express.Router()

const web = require("./web")
const com = require("./com")
 
 
Router.use("/web",web)
Router.use("/com",com)


module.exports = Router 