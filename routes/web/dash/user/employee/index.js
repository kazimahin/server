//web/dash/user/Employee 

const Router = require("express").Router()
const PermissionFunc = require("../../../../../functions/PermissionFunc")

const post = require("./post_req")
const get = require('./get_req')
const put = require('./put_req')
const put_pwd = require('./put_req/pwd')
const delete_req = require('./delete_req')
 
Router.get("/",PermissionFunc("User","Employee","r"),get)
Router.get("/:id",PermissionFunc("User","Employee","r"),get)
Router.post("/",PermissionFunc("User","Employee","w"),post)
Router.put("/:id",PermissionFunc("User","Employee","w"),put)
Router.put("/pwd/:id",PermissionFunc("User","Admin","w"),put_pwd)
Router.delete("/:id",PermissionFunc("User","Employee","w"),delete_req)

   
 
module.exports = Router 