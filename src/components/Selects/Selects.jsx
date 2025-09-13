import { CONFIG } from "@absolute/config/config"
import { useState } from "react"


export const Select =({def_iterable_items,def_function,def_id})=>{
    if (!def_iterable_items) {
        def_iterable_items = 
[
    {value:"default",index:"option"},
    {value:"default",index:"option"}
]
    }
    
const [option,setOption]= useState(def_iterable_items)
return(
   <select id={def_id} onChange={def_function}  className={CONFIG.get("INTERFACE")+'_select'}>
    {option.map(item=><option key={item.value} value={item.value} >{item.index}</option>)}
  </select>

)

}