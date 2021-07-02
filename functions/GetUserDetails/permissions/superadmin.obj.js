module.exports = [
  {
    name:"Dashbord" ,
    icon:"fas fa-envelope", 
    permission:{
      read:true,
      readFull:true,
      readMap:"all",
      readPrivate:false,
      write:true,
      writeMap:"all"

    },
    link:"/d/" ,
    exact:true
  },
 
  {
    name:"User" ,
    icon:"fas fa-envelope", 
    permission:{
      read:true,
    },
    link:[
      {
        name:"Admin" , 
        icon:"fas fa-envelope", 
        permission:{
          read:true,
          readFull:true,
          readMap:"all",
          readPrivate:false,
          write:true,
          writeMap:"all"

        },
        link:"/d/user/admin"  ,
      },
      {
        name:"Employee" , 
        icon:"fas fa-envelope", 
        permission:{
          read:true,
          readFull:true,
          readMap:"all",
          readPrivate:false,
          write:true,
          writeMap:"all"

        },
        link:"/d/user/employee"  ,
       },
       {
        name:"Student" , 
        icon:"fas fa-envelope", 
        permission:{
          read:true,
          readFull:true,
          readMap:"all",
          readPrivate:false,
          write:true,
          writeMap:"all"

        },
        link:"/d/user/student"  ,
      },
      {
        name:"Parents" , 
        icon:"fas fa-envelope", 
        permission:{
          read:true,
          readFull:true,
          readMap:"all",
          readPrivate:false,
          write:true,
          writeMap:"all"

        },
        link:"/d/user/parents"  ,
      },
    ]
  },
  {
    name:"Academic",
    icon:"fas fa-envelope",
    permission:{
      read:true,
    },
    link:[
      {
        name:"Session",
        icon:"fas fa-envelope",
         permission:{
          read:true,
          readFull:true,
          readMap:"all",
          readPrivate:false,
          write:true,
          writeMap:"all"

        },
        link:"/d/academic/session"
      },
      {
        name:"Class",
        icon:"fas fa-envelope",
        permission:{
          read:true,
          readFull:true,
          readMap:"all",
          readPrivate:false,
          write:true,
          writeMap:"all"

        },
        link:"/d/academic/class"
      },
      {
        name:"Subject",
        icon:"fas fa-envelope",
        permission:{
          read:true,
          readFull:true,
          readMap:"all",
          readPrivate:false,
          write:true,
          writeMap:"all"

        },
        link:"/d/academic/subject"
      },
      {
        name:"Event",
        icon:"fas fa-envelope",
        permission:{
          read:true,
          readFull:true,
          readMap:"all",
          readPrivate:false,
          write:true,
          writeMap:"all"

        },
        link:"/d/academic/event"
      },
      {
        name:"Notice",
        icon:"fas fa-envelope",
        permission:{
          read:true,
          readFull:true,
          readMap:"all",
          readPrivate:false,
          write:true,
          writeMap:"all"

        },
        link:"/d/academic/notice"
      },
      {
        name:"Syllabus",
        icon:"fas fa-envelope",
        permission:{
          read:true,
          readFull:true,
          readMap:"all",
          readPrivate:false,
          write:true,
          writeMap:"all"

        },
        link:"/d/academic/syllabus"
      },
      {
        name:"Routine",
        icon:"fas fa-envelope",
        permission:{
          read:true,
          readFull:true,
          readMap:"all",
          readPrivate:false,
          write:true,
          writeMap:"all"

        },
        link:"/d/academic/routine"
      }
    ]
  }

]
 