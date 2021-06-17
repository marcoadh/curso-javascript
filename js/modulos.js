import saludar, {Saluditos, PI } from "./ejemplos/constantes.js";
import {operadores} from "./ejemplos/aritmetica.js";

console.log("<---------- Módulos / Import - Export ---------->");
console.log("");

console.log(PI);
saludar();

console.log("");

console.log(operadores.restando(10,5));
let holaClase = new Saluditos();

holaClase;