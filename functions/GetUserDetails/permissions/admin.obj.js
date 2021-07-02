module.exports = [
  {
    name:"Dashbord" ,
    permission:{
      read:true,
      readFull:true,
      readMap:"all",
      readPrivate:false,
      write:true,
      writeMap:"all"

    },
   },
 
  {
    name:"User" ,
    link:[
      {
        name:"Admin" , 
         permission:{
          read:true,
          readFull:true,
          readMap:"all",
          readPrivate:false,
          write:true,
          writeMap:"own"

        },
       },
      {
        name:"Employee" , 
         permission:{
          read:true,
          readFull:true,
          readMap:"all",
          readPrivate:false,
          write:true,
          writeMap:"all"

        },
        },
      {
        name:"Student" , 
         permission:{
          read:true,
          readFull:false,
          readMap:"all",
          readPrivate:false,
          write:true,
          writeMap:"all"

        },
       },
    ]
  },
  {
    name:"Academic",
    link:[
      {
        name:"Class",
         permission:{
          read:true,
          readFull:true,
          readMap:"all",
          readPrivate:false,
          write:true,
          writeMap:"all"

        },
       },
      {
        name:"Subject",
         permission:{
          read:true,
          readFull:true,
          readMap:"all",
          readPrivate:false,
          write:true,
          writeMap:"all"

        },
       },
      {
        name:"Syllabus",
         permission:{
          read:true,
          readFull:true,
          readMap:"all",
          readPrivate:false,
          write:true,
          writeMap:"all"

        },
       }
    ]
  }

]
 