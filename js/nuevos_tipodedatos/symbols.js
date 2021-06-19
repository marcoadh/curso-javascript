console.log("=========> Tipo de Datos: Symbol");
console.log("");

let id = Symbol("id");
let id2 = Symbol("id2");

console.log(id === id2);
console.log(id, id2);
console.log(typeof id, typeof id2);

console.log("");

const NOMBRE = Symbol("Nombre");
const SALUDAR = Symbol("Saludar");

const persona = {
    [NOMBRE]: "Marco"
}

console.log(persona);

persona.NOMBRE = "Marco Antonio";

// Imprimiendo en consola el objeto "persona"
console.log(persona);
// Imprimiendo en consola la propiedad symbol del objeto "persona"
console.log(persona[NOMBRE]);
// --------------------------
console.log(persona.NOMBRE);

persona[SALUDAR] = function() {
    console.log("Hola, soy una función con tipo de dato Symbol.");
}

console.log(persona);

// Llamando a ejecutar la función Saludar() del objeto "persona"
persona[SALUDAR]();

// Agregando al objeto "persona"
persona.edad = 24;

console.log("");
console.log("====> Se imprimirá mediante un FOR");
for (let propiedad in persona) {
    console.log("");
    console.log(`Nombre propiedad del objeto "persona": ${propiedad}`);
    console.log(persona[propiedad]);
}

// Imprimiendo los atributos privados(Symbols) del objeto "persona"
console.log("");
console.log("Listando Symbols de persona.");
console.log(Object.getOwnPropertySymbols(persona));