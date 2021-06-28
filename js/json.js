console.log("=========> JSON: JavaScript Object Notation");
console.log("");

// Es un formato ligero de intercambio de datos.

const json = {
    cadena: "Marco",
    numero: 24,
    booleano: true,
    arreglo: ["estudiar", "programar", "salir a caminar"],
    objeto: {instagram: "@marco", correo: "marco@gmail.com"},
    nulo: null
}

console.log(json);

console.log("");

console.log(JSON);
// parse() permite analizar una cadena de texto y convertirlo a un objeto o un valor válido para js
console.log(JSON.parse("{}"));
console.log(JSON.parse("[1,2,3]"));
console.log(JSON.parse("true"));
console.log(JSON.parse("false"));
console.log(JSON.parse("24"));
// console.log(JSON.parse("Hola"));
console.log(JSON.parse("null"));
// console.log(JSON.parse("undefined"));

console.log("");

// stringify() permite convertir un objeto o un valor válido de js y lo convierte en cadena de texto
console.log(JSON.stringify({}));
console.log(JSON.stringify([1,2,3]));
console.log(JSON.stringify(24));
console.log(JSON.stringify(true));
console.log(JSON.stringify(false));
console.log(JSON.stringify(null));
console.log(JSON.stringify(undefined));
console.log(JSON.stringify({x:2, y:3, texto:"hola"}));
console.log(JSON.stringify(json));