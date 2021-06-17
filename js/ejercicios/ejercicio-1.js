
// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

console.log("--------------- Ejercicios Lógica Programación ---------------");
console.log("");

console.log(`=====> Ejercicio 1
Programa una función que cuente el número de caracteres de una cadena de texto.
pe. miFuncion("Hola Mundo") devolverá 10.
`);
console.log("Solución:");

let variableALeer = "Este es una cadena de texto donde se le contará la cantidad de caracteres."

function cadenaTexto () {
    console.log(variableALeer);
    console.log(`Cantidad de caracteres: ${variableALeer.length}`);
}

cadenaTexto();


// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

console.log("");
console.log("");
console.log(`=====> Ejercicio 2
Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
`);
console.log("Solución:");

let textoParaRecortar = "Hola Mundo";

function textoPreguntaDos () {
    console.log(textoParaRecortar.substr(0,6));
}

textoPreguntaDos();



// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

console.log("");
console.log("");
console.log(`=====> Ejercicio 3
Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
`);
console.log("Solución:");


let variableTres = "Hola que tal";

function funcionTres (separador, limite) {
    console.log(variableTres.split(separador,limite));
}

funcionTres(" ", variableTres.length);



// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

console.log("");
console.log("");
console.log(`=====> Ejercicio 4
Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
`);
console.log("Solución:");

let variableCuatro = "Hola mundo ";

function preguntaCuatro () {
    console.log(variableCuatro.repeat(3));
}

preguntaCuatro();