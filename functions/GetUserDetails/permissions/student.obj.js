 module.exports = [
 
    {
      name:"Dashbord2" ,
       permission:{
        read:true,
      },
     },
     {
      name:"Dashbord" ,
       permission:{
        read:true,
      },
     },
    {
      name:"User" ,
        
      link:[
        {
          name:"Admin" , 
           permission:{
            read:true,
          },
         },
        {
          name:"Teacher" , 
           permission:{
            read:true,
          },
          },
         
      ]
    },
    {
      name:"Academic",
       permission:{
        read:true,
      },
      link:[
        {
          name:"Class",
           permission:{
            read:true,
          },
         },
        {
          name:"Subject",
           permission:{
            read:true,
          },
         },
        {
          name:"Syllabus",
           permission:{
            read:true,
          },
         }
      ]
    }

]
 