//web/dash/user/Class

const Router = require("express").Router()
const PermissionFunc = require("../../../../../functions/PermissionFunc")

const post = require("./post_req")
const get = require('./get_req')
const put = require('./put_req')
const delete_req = require('./delete_req')
 
Router.get("/",PermissionFunc("Academic","Class","r"),get)
Router.get("/:id",PermissionFunc("Academic","Class","r"),get)
Router.post("/",PermissionFunc("Academic","Class","w"),post)
Router.put("/:id",PermissionFunc("Academic","Class","w"),put)
Router.delete("/:id",PermissionFunc("Academic","Class","w"),delete_req)

   
 
module.exports = Router 
