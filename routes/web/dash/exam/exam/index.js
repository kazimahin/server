//web/dash/Exam/Exam

const Router = require("express").Router()
const PermissionFunc = require("../../../../../functions/PermissionFunc")

const post = require("./post_req")
const get = require('./get_req')
const put = require('./put_req')
const delete_req = require('./delete_req')
 
Router.get("/",PermissionFunc("Exam","Exam","r"),get)
Router.get("/:id",PermissionFunc("Exam","Exam","r"),get)
Router.post("/",PermissionFunc("Exam","Exam","w"),post)
Router.put("/:id",PermissionFunc("Exam","Exam","w"),put)
Router.delete("/:id",PermissionFunc("Exam","Exam","w"),delete_req)

   
 
module.exports = Router 