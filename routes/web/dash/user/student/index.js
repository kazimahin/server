//web/dash/user/Student

const Router = require("express").Router()
const PermissionFunc = require("../../../../../functions/PermissionFunc")

const post = require("./post_req")
const get = require('./get_req')
const put = require('./put_req')
const delete_req = require('./delete_req')
 
Router.get("/",PermissionFunc("User","Student","r"),get)
Router.get("/:id",PermissionFunc("User","Student","r"),get)
Router.post("/",PermissionFunc("User","Student","w"),post)
Router.put("/:id",PermissionFunc("User","Student","w"),put)
Router.delete("/:id",PermissionFunc("User","Student","w"),delete_req)

   
 
module.exports = Router 