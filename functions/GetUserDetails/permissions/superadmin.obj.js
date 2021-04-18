module.exports = [
  {
    name:"Dashbord" ,
    icon:"fas fa-envelope", 
    permission:{
      read:true,
    },
    link:"/d/" ,
  },
  {
    name:"Dashbord2" ,
    icon:"fas fa-envelope", 
    permission:{
      read:true,
    },
    link:"/d/" ,
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
        },
        link:"/d/user/admin"  ,
      },
      {
        name:"Teacher" , 
        icon:"fas fa-envelope", 
        permission:{
          read:true,
        },
        link:"/d/user/teacher"  ,
       },
      {
        name:"Student" , 
        icon:"fas fa-envelope", 
        permission:{
          read:true,
          write:true
        },
        link:"/d/user/student"  ,
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
        name:"Class",
        icon:"fas fa-envelope",
        permission:{
          read:true,
        },
        link:"/d/academic/class"
      },
      {
        name:"Subject",
        icon:"fas fa-envelope",
        permission:{
          read:true,
        },
        link:"/d/academic/subject"
      },
      {
        name:"Syllabus",
        icon:"fas fa-envelope",
        permission:{
          read:true,
        },
        link:"/d/academic/syllabus"
      }
    ]
  }

]
//  module.exports = [
//     {
//       name:"Dashbord" ,
//       icon:"MailIcon", 
//       read:true,
//       link:"/d/" ,
//     },
//     {
//       name:"User" ,
//       icon:"MailIcon", 
//       read:true,
//       link:[
//         {
//           name:"Admin" , 
//           icon:"MailIcon", 
//           read:true,
//           link:"/d/user/admin"  ,
//         },
//         {
//           name:"Teacher" , 
//           icon:"MailIcon", 
//           read:true,
//           link:"/d/user/teacher"  ,
//          },
//         {
//           name:"Student" , 
//           icon:"MailIcon", 
//           read:true,
//           link:"/d/user/student"  ,
//         },
//       ]
//     },
//     {
//       name:"Academic",
//       icon:"MailIcon",
//       read:true,
//       link:[
//         {
//           name:"Class",
//           icon:"MailIcon",
//           read:true,
//           link:"/d/academic/class"
//         },
//         {
//           name:"Subject",
//           icon:"MailIcon",
//           read:true,
//           link:"/d/academic/subject"
//         },
//         {
//           name:"Syllabus",
//           icon:"MailIcon",
//           read:true,
//           link:"/d/academic/syllabus"
//         }
//       ]
//     }

// ]