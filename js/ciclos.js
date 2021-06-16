// console.log("------- while -------")

// let contador = 0;

// while(contador < 10) {
//     console.log(contador);
//     contador++;
// }

// console.log(" ");
// console.log("------- do while -------")
// do {
//     console.log(contador);
//     contador++;
// }while(contador < 10);



console.log(" ");
console.log("------- for -------")
for (let i = 0; i < 10; i++){
    console.log(i);
}

console.log(" ");
let numeros = [10,20,30,40,50,60,70,80,90];

for (let i = 0; i < numeros.length; i++){
    console.log(numeros[i]);
}



console.log(" ");
console.log("------- for in -------")
//Variante del ciclo FOR. Permite recorrer o iterar las propiedades de un objeto primitivo
const yo = {
    nombre      : "Marco",
    apellido    : "De la cruz",
    edad        : 24
};

for (const propiedadDeObjeto in yo) {
    console.log(`${propiedadDeObjeto} : ${yo[propiedadDeObjeto]}`);
}



console.log(" ");
console.log("------- for of -------")
//Permite recorrer cada uno de los elementos de cualquier objeto en js que sea iterable
// Iterable = que se pueda partir en pequeños elementos como los arreglos que cada uno de sus posiciones es un elemento o las cadenas de texto que cada caracter se puede recorrer.

let numeros2 = [1,2,3,4,5,6,7,8,9,10];

for (const elemento of numeros2) {
    console.log(elemento);
}


console.log(" ");
let cadenaTexto = "Hola mundo";

for (const elemento of cadenaTexto) {
    console.log(elemento);
}

