console.log("=========> This");
console.log("");


console.log(this);
console.log(window);
console.log(this === window);

console.log("");

this.nombre = "Contexto Global";
console.log(this.nombre);

console.log("");
function imprimir() {
    console.log(this.nombre);
}
imprimir();



console.log("");
const obj1 = {
    nombre : "Contexto Objeto 1",
    imprimir: function () {
        console.log(this.nombre);
    }
}
obj1.imprimir();



console.log("");
const obj2 = {
    nombre : "Contexto Objeto 2",
    imprimir
}
obj2.imprimir();



console.log("");
const obj3 = {
    nombre : "Contexto Objeto 2",
    imprimir: () => {
        console.log(this.nombre);
    }
}
obj3.imprimir();



console.log("");
function Persona(nombre) {
    this.nombre = nombre;
    // return console.log(this.nombre);

    // Con esta función anónima me traería como respueta "Contexto Global" porque dentro de esta función no hay ninguna propiedad llamada "nombre" y por eso se va directo a la propiedad global.
    // return function() {
    //     console.log(this.nombre);
    // }

    // Usando un arrow function me imprimirá el valor que viene del parámetro "nombre" debido a que un arrow function no crean un "scoop" interno
    return () => console.log(this.nombre);
}

let marco = new Persona("Marco Antonio");
marco(); 