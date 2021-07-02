const { json } = require("express");

module.exports={
 
    com_user:{
        name:String,
        email:String,
        phone:String,
        password:String
        
    
    },
    inst_data:{
        companycode:Number,
        domain:String,
        name:String,
        stub:Number,
        code_type:String,
        code:Number,
        principal:String,
        contact1:Number,
        contact2:Number,
        address:String,
        zip:Number,
        district:String,
        about:String,
        email:String,
        password:String,
        usermail:String,
        template:String,
        session:Array


        

        
    },

    //user ===============================
    admin:{
        id:Number,
        name:String,
        qualification:String,
        birth:String,
        phone:String,
        phone2:String,
        email:String,
        nid:String,
        nationality:String,
        gender:String,
        religion:String,
        blood:String,
         
        p_address:String,
        p_city:String,
        p_zip:String,

        c_address:String,
        c_city:String,
        c_zip:String,


        password:String
    },
    student:{
        id:Number,

        name:String,
        email:String,
        phone:String,
        birth:String,
        height:String,
        weight:String,
        blood:String,
        religion:String,
        admission:String,
        nationality:String,
        nid:String,
        gender:String,
        
        live:String,//f,m,e,s
        address:String,//s
 
        parents:Number,



        password:String,

    },

    parents:{

        id:Number,
        f_name:String,
        f_email:String,
        f_phone:String,
        f_occupation:String,
        f_company:String,
        f_salary:String,
        f_nationality:String,
        f_nid:String,

        m_name:String,
        m_email:String,
        m_phone:String,
        m_occupation:String,
        m_company:String,
        m_salary:String,
        m_nationality:String,
        m_nid:String,

        e_name:String,
        e_phone:String,
        e_address:String,
        e_relation:String,
        e_email:String,

        p_address:String,
        p_city:String,
        p_zip:String,
        c_address:String,
        c_city:String,
        c_zip:String,

        primary:String,
        password:String,

    },

    employee:{
        
        id:Number,
        name:String,
        qualification:String,
        birth:String,
        phone:String,
        phone2:String,
        email:String,
        nid:String,
        nationality:String,
        gender:String,
        religion:String,
        blood:String,
        designation:String,

        subject:String,
        startdate:String,
        sallary:String,

        f_name:String,
        f_nid:String,
        f_nationality:String,
        f_phone:String,
        m_name:String,
        m_nid:String,
        m_nationality:String,
        m_phone:String,

        p_address:String,
        p_city:String,
        p_zip:String,
        c_address:String,
        c_city:String,
        c_zip:String,


        password:String
    


    },


     //academic =======================================
     class_:{
        id:Number,
        name:String,
        teacher:String,
        session:Number,
        group:Array
    },
    routine:{
        id:Number,
        name:String,
        value: Object
    }

}