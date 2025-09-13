
import { CONFIG } from '@absolute/config/config';
for(let value of CONFIG.values()){
    if (!value) {
        console.error("ERROR:No se han detectado las principales variables de entorno");
    }
}

//setear a todos los elementos de la aplicacion para que tengan una sola conbinacion de
//colores
//before--------
setTimeout(()=>{
   //aqui se analisaran las dependencis antes de iniciar la applicacion
},100)
