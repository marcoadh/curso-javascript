// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
console.log("====> Pregunta 5");

const invertirTexto = (texto = "") => {
    if (!texto) {
        return console.warn("No has ingresado ningún texto.");
    }
    else {
        return console.info(`El texto ingresado es: "${texto}",
        y el texto invertido es: "${texto.split("").reverse().join("")}".`);
    }
}


// invertirTexto("");
invertirTexto("Hola mundo");

console.log("");
console.log("");



// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
console.log("====> Pregunta 6");

const palabraRepetida = (texto = "", palabra="") => {
    if (!texto) return console.warn("No has ingresado ninguna cadena de texto.");
    
    if (!palabra) return console.warn("No ingresaste la palabra a evaluar.");

    let i = 0,
        contador = 0;
    
    while( i !== -1){
        i = texto.indexOf(palabra, i);

        if (i !== -1) {
            i++;
            contador++;
        }
    }

    return console.info(`
    El texto ingresado es: "${texto}",
    la palabra a buscar es: "${palabra}",
    y se repite ${contador} veces.
    `);   
}

palabraRepetida("hola mundo hello mundo", "mundo");

console.log("");
console.log("");

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
console.log("====> Pregunta 7");

const palindromo = (palabra = "") => {
    if (!palabra) {
        return console.warn("No ingresaste ninguna palabra o frase.");
    }

    palabra = palabra.toLowerCase();

    let palabraAlReves = palabra.split("").reverse().join("");

    return (palabra === palabraAlReves)
        ? console.info(`
        Si es palíndromo,
        palabra ingresada: "${palabra}",
        palabra al revés: "${palabraAlReves}".
        `)
        : console.info(`
        No es palíndromo,
        palabra ingresada: "${palabra}",
        palabra al revés: "${palabraAlReves}".
        `)
}

palindromo("olo");
palindromo("Hola");

console.log("");
console.log("");

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
console.log("====> Pregunta 8");

const eliminarCaracteres = (texto = "", patron = "") => 
    (!texto)
        ? console.warn("No ingresaste ninguna palabra o frase.")
        : (!patron)
            ? console.warn("No ingresaste patrón a eliminar.")
            : console.info(texto.replace(new RegExp(patron, "ig"), ""));

eliminarCaracteres();
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5");
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");

