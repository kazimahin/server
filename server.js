//import module
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const morgan = require("morgan")
const cors = require("cors")
const cookieParser = require("cookie-parser")
 

require("dotenv").config()

//use module 
mongoose.connect( process.env.MODE == "prod" ? process.env.MONGODB_URI_PROD  :  process.env.MONGODB_URI_DEV,{useNewUrlParser: true,useUnifiedTopology: true})
        .then(()=>console.log("mongoose connected succesfully"))
        .catch((e)=>console.log("mongoose not connnected an error is "+e))

app.use(express.json())
app.use(morgan("dev"))
app.use(cors({credentials: true, origin: true}))
app.use(cookieParser())

//import middleware custom function

const routes = require("./routes")

 

        // web route

app.use("/api/",routes)


 
 

app.listen(process.env.PORT,()=>console.log(`server is running on port ${process.env.PORT}`))

