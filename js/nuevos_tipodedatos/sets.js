console.log("=========> Tipo de Dato: Sets");
console.log("");
// El tipo de dato Set, parece ser un Array de datos únicos pero no lo es.

const set = new Set([0,1,2,3,4,5,6,6,"Hola", "HOLA", true, false, true]);

console.log(set);

const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(2);
set2.add(3);
set2.add(true);
set2.add(true);
set2.add(false);
set2.add({});

console.log(set2);
console.log(set2.size);

console.log("");

console.log("Recorriendo set");
for (item of set) {
    console.log(item);
}
console.log("Recorriendo set");


console.log("");

console.log("Recorriendo set2");
set2.forEach(item => console.log(item));
console.log("Recorriendo set2");


console.log("");
console.log("Pasando el obejo Set a Array");
let arr = Array.from(set);
console.log(arr);

set.delete("HOLA");
console.log(set);

console.log(set.has("Hola"));
console.log(set.has("HOLA"));

set2.clear();
console.log(set2);