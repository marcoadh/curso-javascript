// --------------------------- if- else

let edad = 18;

// if (edad > 17 ) {
//     console.log("Eres mayor de edad, puedes entrar.");
// }
// else {
//     console.log("No eres mayor de edad, no puedes entrar.");
// }


// --------------------------- if- else if - else

let hora = 19;

// if (hora >= 0 && hora<6) {
//     console.log("Déjame dormir");
// }
// else if (hora >= 6 && hora <12) {
//     console.log("Buenos días");
// }
// else if (hora >= 12 && hora <19) {
//     console.log("Buenas tardes");
// }
// else {
//     console.log("Buenas noches");
// }

// --------------------------- Operador Ternario (condición) ? verdaero : falso

console.log("------ Operador Ternario ------");
let eresMayor = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";

console.log(eresMayor);


// --------------------------- switch - case

console.log(" ");
console.log("------ Switch / Case ------");

let dia = 77;

switch (dia) {
    case 0:
        console.log("Domingo");
        break;

    case 1:
        console.log("Lunes");
        break;
    
    case 2:
        console.log("Martes");
        break;
    
    case 3:
        console.log("Miércoles");
        break;
    
    case 4:
        console.log("Jueves");
        break;
    
    case 5:
        console.log("Viernes");
        break;

    case 6:
        console.log("Sábado");
        break;

    default:
        console.log("El día no existe");
        break;
}