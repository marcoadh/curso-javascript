console.log(" ");
console.log("------- Arrow Functions -------");
//Funciones flechas, solo en funciones anónimas expresadas

/**
 * Diferencia entre función expresada y función declarada
 * 
 * Declarada: la función puede ser invocado en cualquier parte del código.
 * 
 * Expresada: la función no puede ser invocado en cualquier parte del código.
 */
 console.log(" ");
funcionDeclarada();
function funcionDeclarada() {
    console.log("Este es una función declarada.");
}
funcionDeclarada();

console.log(" ");
const funcionExpresada = function(){
    console.log("Este es una función expresada.");
};
funcionExpresada();


console.log(" ");
console.log(" ====> Este es un Arrow Function ");
const funcionFlecha = () => console.log("Hola, aquí una función flecha");
funcionFlecha();


console.log(" ");
console.log(" ====> Este es un Arrow Function con parámetros");
const saludar = nombre => console.log(`Hola ${nombre}`);
saludar("Marco");

console.log(" ");
const sumar = (a,b) => a+b;
console.log(sumar(10,20));

console.log(" ");
const nLineas = () => {
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
}
nLineas();

console.log(" ");
const numeros = [10,20,30,40,50];
numeros.forEach((elementoArray, index) => {
    console.log(`${elementoArray} está en la posición ${index}`);
});

// No es una buena practica usar arrow functions al declarar métodos en un objeto
console.log(" ");
const perro = {
    nombre: "Doggy",
    ladrar() {
        console.log(`${this.nombre} ladra a personas que no conoce.`);
    }
};

perro.ladrar();