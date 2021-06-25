console.log("=========> Tipo de Dato: WeakSet - WeakMap");
console.log("");
// Solo pueden almacenar referencias débiles.
// No se puede recorrer, no son elementos iterables
// Se debe agregar uno por uno los datos en un WeakSet y un WeakSet

// const ws = new WeakSet();

// let valor1 = {"valor1":1},
//     valor2 = {"valor2":2},
//     valor3 = {"valor3":3};

// ws.add(valor1);
// ws.add(valor2);

// console.log(ws);

// console.log(ws.has(valor1));
// console.log(ws.has(valor3));

// ws.delete(valor2);
// console.log(ws);

// ws.add(valor2);
// ws.add(valor3);
// console.log(ws);

// setInterval(() => {
//     console.log(ws);
// }, 1000);

// setTimeout(() => {
//     valor1 = null;
//     valor2 = null;
//     valor3 = null;
// }, 5000);

const wm = new WeakMap();
let llave1 = {};
let llave2 = {};
let llave3 = {};

wm.set(llave1, 1);
wm.set(llave2, 2);
console.log(wm);

console.log(wm.has(llave1));
console.log(wm.has(llave3));


console.log(wm.get(llave1));
console.log(wm.get(llave2));

wm.delete(llave2);
console.log(wm);


wm.set(llave2, 2);
wm.set(llave3, 3);
console.log(wm);