
//Configuracion de variables de entorno y configuracion de la interfaz
//funcion para validar si las variables estan disponibles
//procesar funcion de analisis de variables 
const INTERFACE = import.meta.env.VITE_INTERFACE||"axi_reg";
const THEME = import.meta.env.VITE_THEME||"Axiforma Regular";
const API_KARDEX = import.meta.env.VITE_HOST||false;
const KEY_API = import.meta.env.VITE_API_KEY||false;
const STATUS = API_KARDEX? "Kardex-API version: 0.1":"API-KARDEX: No se ah cargado correctamente" || KEY_API? "Kardex-API version: 0.1":"Credenciales de Autenticacion no se ha cargado correctamente"

export const CONFIG= new Map(
[
["THEME",THEME],
["INTERFACE",INTERFACE],
["API_BASE_URL",API_KARDEX],
["KEY_API",KEY_API],
["STATUS",STATUS]
])














