//import module
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const morgan = require("morgan")
const cors = require("cors")
const cookieParser = require("cookie-parser")
 

require("dotenv").config()

//use module 
mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser: true,useUnifiedTopology: true})
        .then(()=>console.log("mongoose connected succesfully"))
        .catch((e)=>console.log("mongoose not connnected an error is "+e))

app.use(express.json())
app.use(morgan("dev"))
app.use(cors({credentials: true, origin: true}))
app.use(cookieParser())

//import middleware custom function

const web = require("./routes/web")
  

// web route

app.all("/a/a",web)


 
 

app.listen(process.env.PORT,()=>console.log(`server is running on port ${process.env.PORT}`))

