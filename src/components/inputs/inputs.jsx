import { CONFIG } from '@absolute/config/config'
import React from 'react'

export const Password = ()=>{
return(
    <input autoComplete="current-password"
    required type="password" 
    maxLength="50"
    minLength="20"
    placeholder=' ingrese su contraseña'
    className={CONFIG.get("INTERFACE")+"_inputs"}
    ></input>
)
}
export const InputText = ({def_name,def_id,def_function,def_patron,def_value_default})=>{
return(
    <input  id={def_id}
    name={def_name}
    autoComplete="username"
    required  
    onChange={def_function} 
    type="text"
    pattern={def_patron}
    maxLength="50"
    minLength="20"
    className={CONFIG.get("INTERFACE")+"_inputs"}
    placeholder={" "+def_value_default}>
    </input>
)
}
export const InputNumber =({def_function,def_patron,def_value_default})=>{
return(
    <input className={CONFIG.get("INTERFACE")+"_inputs"} 
    onChange={def_function}
    type="text" pattern={def_patron}
    maxLength="50"
    minLength="20" 
    placeholder={def_value_default} ></input>
)

}



