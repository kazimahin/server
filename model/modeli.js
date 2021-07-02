//modelf funcrion 

//modelf funcrion function babohar korar jonno age theke schema create korte hobe (schemas.js) file e
//ekhetre function 2 vabe bebohar kora jabe 
//   1. modelf(modelname) =>ekhetre model er nam e schima hisebe bebohar kora hobe
//   2. modelf(modelname,schemaname) =>ekhetre model ernam model er nam hobe , ar schemaname bebohar hobe schema name hisebe



const mongoose = require("mongoose")
const schemas = require("./schemas") // all schema stractuire have been stored here

//models ekti json object ja tempurary model create kore thake
const models={}; 



module.exports = (modelName, schemaName)=>{



    //model termprary models variable save na thakle ta banaitase
    if(!eval("models."+modelName)){

         //schema name na thakle ta model name hoiya jaitase
        (!schemaName || schemaName===null)? schemaName = modelName:null
        //schema toiri kortase
        const schema = mongoose.Schema(eval("schemas."+schemaName))
        //model save kortase models variable e ,ekhon model pawa jabe (models.modelname) e
        eval("models."+modelName+"= mongoose.model(modelName,schema)") 

    }

    //return saved funcrion 
    return eval("models."+modelName)

}


