
const a = [];
const b = [1, true, "hola", ["a", "b", "c"]];

console.log(a);
console.log(b);

console.log(b[0]);
console.log(b[1]);
console.log(b[2]);
console.log(b[3]);

console.log(b[3][0]);
console.log(b[3][1]);
console.log(b[3][2]);

const c = Array.of(1,2,3,"A","B","C");

console.log(c);

const d = Array(10).fill(1);
console.log(d);


// -------------- Viejas maneras de declarar un arreglo
const e = new Array();
console.log(e);

const f = new Array(1,2,3,"a");
console.log(f);
// -------------- Viejas maneras de declarar un arreglo

const estaciones = ["Verano", "Primavera", "Otoño", "Invierno"];
console.log(estaciones);

estaciones.push("Ni idea");
console.log(estaciones);

// estaciones.pop();
// console.log(estaciones);

// estaciones.pop();
// console.log(estaciones);

estaciones.forEach(function(el, index){
    console.log(`<li id="${index}">${el}</li>`);
});