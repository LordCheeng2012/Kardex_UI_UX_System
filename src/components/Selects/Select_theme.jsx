
import json from '@utils/themes.json' assert {type:'json'}
import { useState } from 'react'

  export const Select = ({funcion,inter_face})=>{
     const [option,setOption]= useState(json)    
       return(
        <>
            <select value={inter_face} onChange={funcion} className={inter_face+'_select'} >
             {option.map(item=><option key={item.theme} value={item.theme} >{item.inter_face}</option>)}
               </select>
          </>
       )
  
     }
