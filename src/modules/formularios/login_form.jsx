import { Buttons } from "@components/Buttons/Buttons"
import {Password,InputText} from '@components/inputs/inputs'
import '@absolute/pages/css/login.css'
export const LoginForm = ({def_Interface})=>{
return(
<div className={"container"}>
  <section className={def_Interface+"_border"+ " item"}>
  <div className="sub_container_title">
  <div className="sub_item_title t">
    <h1>INICIAR SESSION</h1>
    <h2>Sistema de Control</h2>
  </div>
  <div className="sub_item_title s">
    <span className="material-symbols-outlined">
      home
      </span>
  </div>
  </div>
  <div className={def_Interface+"_altern"+" sub_container_form"}>
    <form>
      <div className="item_form">
        <div className="cont_input">
          <label>Usuario</label>
            <InputText 
            def_value_default={"ingrese su correo"}
            def_id={"id_text"}
            def_patron={"^(\w{10,20})(@UL.COM)$"}>
            </InputText>
            <span className="material-symbols-outlined">
            account_circle
            </span>
        </div>
         <div className="card active chelsea_error">
        <div className="item_info">
            <h1>ERROR</h1>
            <p>Ocurrio un error al intentar comunicarse con el servidor</p>
            </div>
            <div className="item_icon">
           <span class="material-symbols-outlined">
                error
                </span>
            </div>
          </div>
         
          <div className="cont_input">
        <label>Contraseña</label>
        <Password></Password>
        <span className="material-symbols-outlined">
          lock
          </span>
        </div>
         <div className="card active chelsea_success">
            <div className="item_info">
            <h1>SUCCESS</h1>
            <p>Validando informacion en el sistema, un momento por favor...</p>
            </div>
            <div className="item_icon">
            <span class="material-symbols-outlined">
                check_circle
                </span>
            </div>
          </div>
      </div>
      <div className="item_form">
        <div className="cont_submit">
         <Buttons text={"INICIAR SESSION"}
         type={"_btn_primary"}></Buttons>
        </div>

      </div>
    </form>
  </div>
  </section>
  <section className={ def_Interface+"_altern"+" item background"}>
     <div className="background_container">
         <h1>CIRCUITO MAGICO DEL AGUA</h1>
         <h2>Kardex System - UX</h2>
         <p>Powered by ULTIMATE 2012 | </p>
         
     </div>
  </section>
</div>

)}