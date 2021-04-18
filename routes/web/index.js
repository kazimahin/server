//web/
const Router = require("express").Router()

const auth = require("./auth")
const site = require("./site")
const dash = require("./dash")
 

Router.use("/auth",auth)
Router.use("/dash",dash)
Router.use("/site",site)
 

module.exports = Router  