//web/dash/user/admin

const Router = require("express").Router()
const PermissionFunc = require("../../../../../functions/PermissionFunc")

const post = require("./post_req")
const get = require('./get_req')
const put = require('./put_req')
const put_pwd = require('./put_req/pwd')
const delete_req = require('./delete_req')
 
Router.get("/",PermissionFunc("User","Admin","r"),get)
Router.get("/:id",PermissionFunc("User","Admin","r"),get)
Router.post("/",PermissionFunc("User","Admin","w"),post)
Router.put("/:id",PermissionFunc("User","Admin","w"),put)
Router.put("/pwd/:id",PermissionFunc("User","Admin","w"),put_pwd)
Router.delete("/:id",PermissionFunc("User","Admin","w"),delete_req)

   
 
module.exports = Router 