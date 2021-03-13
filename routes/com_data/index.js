const Router = require("express").Router()
const dashbord_sites = require("./dashbord/sites")


Router.post("/",(req,res)=>{

    res.send("hellow world")
 })

 Router.post("/sites",dashbord_sites)

module.exports = Router