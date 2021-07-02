  
module.exports =   PermissionCombiner =(o,n)=>{
  
    
        const combine =  o


        o.map((oldvalue,oldvaluekey)=>{
        n.map(newvalue=>{
    
            const New = oldvalue

            if(oldvalue.name === newvalue.name ){
                New.permission = {...oldvalue.permission,...newvalue.permission}
                if(typeof oldvalue.link == "string"){
                    combine.splice(oldvaluekey,1,New)
                }else if(typeof oldvalue.link == "object"){
 
                    oldvalue.link.map((oldlinkvalue,keyolv)=>{
                    newvalue.link.map(newlinkvalue=>{
                        if(oldlinkvalue.name === newlinkvalue.name){
                             New.link[keyolv].permission = {...oldlinkvalue.permission,...newlinkvalue.permission}
                         }
                    })
                    })
                    combine.splice(oldvaluekey,1,New)
                }
            } 
    
        })
        })

         return combine
    
    }

 
