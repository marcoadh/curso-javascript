export const PI = Math.PI;

let usuario = "Marco";
let clave = "12345";

// Las exportaciones por defecto solo se puede en funciones y clases
export default function saludar () {
    console.log("Saludos a todos.");
}

export class Saluditos {
    constructor() {
        console.log("Saludando desde una clase.");
    }
}