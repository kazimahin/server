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
const auth = require('./routes/auth/')
const com_auth = require('./routes/com_auth')
const makemyapp = require('./routes/makemyapp/') 
const com_data = require("./routes/com_data/")
const website = require("./routes/website/")
// use middleware custom function
app.use('/auth',auth)


 
//for company web
app.use('/makemyapp',makemyapp)
app.use('/com_auth',com_auth)
app.use("/com_data" , com_data)
app.use("/website",website )
app.use("/",(req,res)=>res.send("hellow world"))

 

app.listen(process.env.PORT,()=>console.log(`server is running on port ${process.env.PORT}`))

