console.log("=========> Tipo de Dato: Iterator");
console.log("");

const iterable = [1,2,3,4,5];

// Accedemos al iterador de la variable "iterable"
const iterador = iterable[Symbol.iterator]();

console.log(iterable);
console.log(iterador);

// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());

let next = iterador.next();

while(!next.done) {
    console.log(next.value);
    next = iterador.next();
}