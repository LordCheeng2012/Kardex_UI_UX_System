import { Buttons } from '@components/Buttons/Buttons'
import { useState } from 'react'
import { Select } from '@components/Selects/Select_theme' 
import { Background } from '../modules/background/background'
export const Theme=()=>{
    const [theme,setTheme] = useState('Axiforma Regular')
    const [inter_face,setInterface] = useState('axi_reg')
    const changue_theme = (select)=>{
        setTheme(select.target.options[select.target.options.selectedIndex].text)
        setInterface(select.target.value)
       
    }
    const Body =()=>{
        return(
            <>
            <h1 className='title'>React JS - APP-Kardex-UI</h1>
      <h3>DEMO - 1</h3>
      <h2>Seleccione un tema de colores</h2>
      <Select  funcion={changue_theme} inter_face={inter_face}></Select>
      <Buttons type={inter_face+'_btn_success'} 
      text={"Hola boton desde componente botones"} ></Buttons>
      <button className={inter_face + '_btn_success'} >Success</button>
      <button className={inter_face + '_btn_error'} >Error</button>
      <button className={inter_face + '_btn_warning'} >Warning</button>
      <input type='text' className={inter_face + '_inputs'} defaultValue={"Valor defecto"}></input>
      <h1>{theme}</h1>
      <h2>Themas</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi deleniti maiores, possimus voluptatibus aliquam corporis totam debitis nihil? Necessitatibus nemo ab minus aperiam, nam in dolores eligendi voluptas enim totam.</p>
      <h3>powered by ULTIMATE 2012</h3>            
            </>
        )
    } 

return(
<>
<Background body={<Body></Body>} className={inter_face}></Background>
</>


)}