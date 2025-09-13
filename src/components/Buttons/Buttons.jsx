import { CONFIG } from '@absolute/config/config'
import React from 'react'
//gestionador de eventos 
const HandleClick = ({text,type,click})=> {
return(
<button onClick={click} className={CONFIG.get("INTERFACE")+type} >{text}</button>
)
}
export const Buttons = ({text,type,clickEvent}) => {
  return (
   <HandleClick click={clickEvent} text={text} type={type} ></HandleClick>
  )
}

