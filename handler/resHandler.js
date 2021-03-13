module.exports = {
    serverErr:async (res,message,err)=>{
        await res.status(500).json({message,err})
    },
    clientErr:async(res,message,err)=>{
        await res.status(400).json({message,err})
    },
    success:async (res,message,value)=>{
        await res.status(200).json({message,value})
    },
}