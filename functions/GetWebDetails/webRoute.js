module.exports = [
  {
    name:"Root" ,
    icon:"fas fa-envelope " , 
    permission:{
      read:true
    },
    link:"/" 
  },

  {
    name:"Academic",
    icon:"fas fa-envelope " ,
    permission:{
      read:true
    },
    link:[
      {
        name:"Class",
        icon:"fas fa-envelope " ,
        permission:{
          read:true
        },
        link:"/class"
      },
      {
        name:"Subject",
        icon:"fas fa-envelope " ,
        permission:{
          read:true
        },
        link:"/subject"
      },
      {
        name:"Syllabus",
        icon:"fas fa-envelope " ,
        permission:{
          read:true
        },
        link:"/syllabus"
      }
    ]
  },

  
  {
    name:"Login" ,
    icon:"fas fa-envelope " , 
    permission:{
      read:true
    },
    link:"/login" 
  },
   
]