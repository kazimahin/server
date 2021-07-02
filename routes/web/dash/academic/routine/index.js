//web/dash/academic/routine

const Router = require("express").Router()
const PermissionFunc = require("../../../../../functions/PermissionFunc")

const post = require("./post_req")
const get = require('./get_req')
const put = require('./put_req')
const delete_req = require('./delete_req')
 
Router.get("/",PermissionFunc("Academic","Routine","r"),get)
Router.get("/:id",PermissionFunc("Academic","Routine","r"),get)
Router.post("/",PermissionFunc("Academic","Routine","w"),post)
Router.put("/:id",PermissionFunc("Academic","Routine","w"),put)
Router.delete("/:id",PermissionFunc("Academic","Routine","w"),delete_req)

   
 
module.exports = Router 