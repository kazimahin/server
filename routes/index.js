//Routes/
const express = require("express")
const Router = express.Router()
const GetWebDetails = require("../functions/GetWebDetails/")
const GetDomain = require("../functions/GetDomain")

const web = require("./web")
const com = require("./com")
 
 
Router.use("/web",GetDomain,GetWebDetails,web)
Router.use("/com",com)


module.exports = Router 