console.log("<---------- Objeto console ---------->");
console.log("");

console.error("Este es un mensaje de error.");
console.warn("Esto es un aviso.");
console.info("Esto es un mensaje informativo.");
console.log("Un registro de lo que ha pasado en nuestra aplicación.");

let nombre = "Marco",
    apellido = "De la cruz",
    edad = 24;

console.log(nombre, apellido, edad);
console.log(`Hola, me llamo ${nombre} ${apellido} y tengo ${edad} años.`);
console.log(`Hola, me llamo %s %s y tengo %d años.`, nombre, apellido, edad);
// console.clear();

console.log(window);
console.log(document);

console.group("Grupo 1 de la consola");
console.log("1")
console.log("2")
console.log("3")
console.log("4")
console.groupEnd();

console.log("");

console.log(console);
console.table(Object.entries(console).sort());

console.log("");

const diasDeSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo"],
        vocales = ["a","e","i","o","u"];

console.table(diasDeSemana);
console.table(vocales);

console.log("");

const perro = {
    nombre: "doggy",
    raza: "Gran Danés",
    color: "Banco"
}

console.table(perro);

console.log("");

console.clear();

console.time("Tiempo en crearse");
const arreglo = Array(100);
for(i=0; i <arreglo.length; i++){
    arreglo[i] = i;
}
console.timeEnd("Tiempo en crearse");
// console.table(arreglo);

console.clear();

for (i = 0; i < 10; i++) {
    console.count("Código For");
    console.log(i);
}

console.clear();

let x = 1, y = 2, pruebaXY = "Se espera que X siempre sea menor que Y";

console.assert(x < y, {x, y, pruebaXY});