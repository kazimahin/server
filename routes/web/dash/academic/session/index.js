//web/dash/academicf/Session

const Router = require("express").Router()
const PermissionFunc = require("../../../../../functions/PermissionFunc")

const post = require("./post_req")
const get = require('./get_req')
const put = require('./put_req')
const delete_req = require('./delete_req')
 
Router.get("/",PermissionFunc("Academic","Session","r"),get)
Router.get("/:id",PermissionFunc("Academic","Session","r"),get)
Router.post("/",PermissionFunc("Academic","Session","w"),post)
Router.put("/:id",PermissionFunc("Academic","Session","w"),put)
Router.delete("/:id",PermissionFunc("Academic","Session","w"),delete_req)

   
 
module.exports = Router 
