
import React from 'react'
import { Background } from "../modules/background/background";
import { CONFIG } from "@absolute/config/config"
import { createRoot } from 'react-dom/client'
import { LoginForm } from '../modules/formularios/login_form';
createRoot(document.getElementById('root')).render(
   
   <Background body={<LoginForm def_Interface={CONFIG.get("INTERFACE")} ></LoginForm>}>   
   </Background>
)
