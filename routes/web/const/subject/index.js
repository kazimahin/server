const e = require("express")
const { success, clientErr,serverErr } = require("../../../../handler/resHandler")

module.exports = (req,res) =>{


    const value = [ 
        {
            value:01,
            title:"Bangla",               
            sub_code:"101"
        },
        {
            value:02, 
            title:"Bangla 1st",
            code:"101" 
        },
        {
            value:03, 
            title:"Bangla 2nd",                
            code:"102" 
        },
        {   
            value:04,
            title:"English",               
            code:"107" 
        },
        { 
            value:05,
            title:"English 1st",               
            code:"107" 
        },
        { 
            value:06,
            title:"English 2nd",               
            code:"108" 
        },
        { 
            value:07,
            title:"Math",                      
            code:"109" 
        },
        { 
            value:08,
            title:"Science",                   
            code:"127" 
        },
        { 
            value:09,
            title:"BGS",                       
            code:"150" 
        },
        { 
            value:10,
            title:"Religion",                  
            code:"111" 
        },
        { 
            value:11,
            title:"ICT",           
            code:"154" 
        },
        { 
            value:12,
            title:"Physical Education",        
            code:"147" 
        },
        { 
            value:13,
            title:"Career",        
            code:"156" 
        },
        { 
            value:14,
            title:"art",        
            code:"148" 
        },
        {
            value:15,
            title:"krishi and garasto",
            code:"134/151"
        },




        { 
            value:16,
            title:"chemistry",        
            code:"137" 
        },
        { 
            value:17,
            title:"Physics",        
            code:"136" 
        },
        { 
            value:18,
            title:"Biology",        
            code:"138" 
        },
        { 
            value:19,
            title:"Higher Math",        
            code:"126" 
        },




        { 
            value:20,
            title:"Orthonity",        
            code:"141" 
        },
        { 
            value:21,
            title:"Pouronity",        
            code:"140" 
        },
        { 
            value:22,
            title:"Bangladesh Etihash o sovotta",        
            code:"153" 
        },
        { 
            value:23,
            title:"Vugol o poribesh",        
            code:"110" 
        },




        { 
            value:24,
            title:"Hishab biggan",        
            code:"146" 
        },
        { 
            value:25,
            title:"babshay uddog",        
            code:"143" 
        },
        { 
            value:26,
            title:"fynnance",        
            code:"152" 
        },
        //27,28

          
    ]

    success(res,"data fetched succesfully" ,value)

}