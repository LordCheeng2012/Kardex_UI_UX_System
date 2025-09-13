
import '@utils/css/Ultimate2012UICSS/backgrounds.css'
import '@Hooks/Hooks'
import { CONFIG } from '@absolute/config/config'
export const Background = ({body,className}) => {
  if (!className) {
    className = CONFIG.get("INTERFACE")
  }
  if (!body) {
    alert("ERROR:Innesperado - no se cargo la interfaz de usurio")
  }
  return(
   <main className={'config_body ' + className + '_body'}>
     {body}
    </main>
  )
}
