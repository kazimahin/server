//web/
const Router = require("express").Router()
const GetUserDetails = require("../../functions/GetUserDetails")

const auth = require("./auth")
const site = require("./site")
const dash = require("./dash")
const const_ = require("./const")
 

Router.use("/auth",auth)
Router.use("/dash",GetUserDetails,dash)
Router.use("/site",site)
Router.use("/const",const_)
 

module.exports = Router  