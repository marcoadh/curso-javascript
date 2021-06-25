console.log("=========> Tipo de Dato: Generators");
console.log("");

// Permite volver iterable el código de una función.
// Poner un * al lado de una función da a entender que es un generator.

function* iterable() {
    yield "hola 1";
    console.log("Hola mundo");
    yield "hola 2";
    console.log("Seguimos con más instrucciones.");
    yield "hola 3";
    yield "hola 4";
}

let iterador = iterable();

// console.log(iterador.next());
// console.log(iterador.next());

for (let yield of iterador) {
    console.log(yield);
}

const arr = [...iterable()];

console.log(arr);

function cuadrado(numero) {
    setTimeout(() => {
        return console.log({numero, resultado: numero * numero});
    }, Math.random() * 1000);
}

function* generador() {
    console.log("Inicia Generador");
    yield cuadrado(0);
    yield cuadrado(1);
    yield cuadrado(2);
    yield cuadrado(3);
    yield cuadrado(4);
    yield cuadrado(5);
    console.log("Termina Generador");
}

let gen = generador();

for(let y of gen){
    console.log(y);
}