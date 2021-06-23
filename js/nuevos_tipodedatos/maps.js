console.log("=========> Tipo de Dato: Maps");
console.log("");
// Característica principal de map es que permite que las "llaves - keys" no solo sean texto
// sino también, que sea null, NaN, undefined, números, etc.

let mapa = new Map();
mapa.set("nombre", "Marco Antonio");
mapa.set("apellido", "De la cruz Henriquez");
mapa.set("edad", 24);


console.log(mapa);
console.log(mapa.size);
console.log(mapa.has("direccion"));
console.log(mapa.get("nombre"));
mapa.set("nombre", "Marco De la cruz");
console.log(mapa.get("nombre"));
mapa.delete("apellido");


mapa.set(19, "diecinueve");
mapa.set(false, "falso");
console.log(mapa);

for (let [llave, valor] of mapa) {
    console.log(`Llave: ${llave} - Valor: ${valor}`);
}

console.log("");
const mapa_2 = new Map([
    ["nombre", "Alberto"],
    ["apellido", "Alvarez"],
    ["edad", 30],
    [null, "nulo"]
]);

console.log(mapa_2);



console.log("");

// Guardando los nombres de las llaves en una variable tipo array
const llavesMapa2 = [...mapa_2.keys()];
// Guardando los nombres de los valores en una variable tipo array
const valoreMapa2 = [...mapa_2.values()];

console.log(llavesMapa2);
console.log(valoreMapa2);