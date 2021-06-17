console.log("====> Pregunta 1");
// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

// const contarCaracteres =  (preguntaUno = prompt("Ingresa alguna cadena de texto.")) => 
//     (!preguntaUno)
//         ? console.warn("No ingresó ninguna cadena de texto.")
//         : console.info(`La cadena de texto: "${preguntaUno}" tiene ${preguntaUno.length} caracteres.`);

const contarCaracteres =  (preguntaUno = prompt("==> Ejercicio 1 : Ingresa alguna cadena de texto.")) => {
    if(!preguntaUno) {
        console.warn("No ingresó ninguna cadena de texto.");
    }
    else{
        console.info(`La cadena de texto: "${preguntaUno}" tiene ${preguntaUno.length} caracteres.`);
    }
}







// ============================== DESCOMENTA LA FUNCIÓN "contarCaracteres();" ==============================
// contarCaracteres(); 
// ============================== DESCOMENTA LA FUNCIÓN "contarCaracteres();" ==============================







console.log("====> Pregunta 2");
// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

/*
    ---------------- Primera forma de resolver el ejercicio 2

    const recortarTexto = (texto=prompt("==> Ejercicio 2 : Ingresa texto."), inicio=prompt("Ingresar longitud inicial"), fin=prompt("Ingresar longitud final")) => {
        if(!texto) {
            console.warn("No ingresó ninguna cadena de texto.");
        }
        else{
            console.info(`
            La cadena de texto es: "${texto}",
            la cadena recortada será desde: longitud ${inicio} hasta ${fin},
            la cadena a mostrar es: "${texto.substr(inicio,fin)}"`);
        }
    }


    ---------------- Segunda forma de resolver el ejercicio 2

    const recorte = (texto=prompt("==> Ejercicio 2 : Ingresa texto."), i=prompt("Ingresar longitud inicial"), f=prompt("Ingresar longitud final")) => 
        (!texto)
            ? console.warn("No ingresó ninguna cadena de texto.")
            : console.info(`
            La cadena de texto es: "${texto}",
            la cadena recortada será desde: longitud desde ${i} hasta ${f},
            la cadena a mostrar es: "${texto.slice(i,f)}".
            `)
*/

const recorte = (texto=prompt("==> Ejercicio 2 : Ingresa texto."), longitud = prompt("Ingresar longitud.")) => 
    (!texto)
        ? console.warn("No ingresó ninguna cadena de texto.")
        : (!longitud)
            ? console.warn("Usted no ingresó la longitud para recortar el texto.")
            : console.info(`
            La cadena de texto es: "${texto}",
            la cadena será recortada desde: longitud 0 hasta ${longitud},
            la cadena a mostrar es: "${texto.slice(0,longitud)}"
            `)






// ============================== DESCOMENTA LA FUNCIÓN "recorte();" ==============================
// recorte();
// ============================== DESCOMENTA LA FUNCIÓN "recorte();" ==============================







console.log("====> Pregunta 3");
// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

const separadorDeTexto = (texto=prompt("==> Ejercicio 3 : Ingresa texto.")) => {

    if(!texto) {
        console.warn("No ingresaste ninguna cadena de texto.");
    }
    else {
        console.info(`
        La cadena de texto ingresado es: "${texto}"
        y el resultado es: ${texto.split(" ")}
        `);
    }
}







// ============================== DESCOMENTA LA FUNCIÓN "separadorDeTexto();" ==============================
// separadorDeTexto();
// ============================== DESCOMENTA LA FUNCIÓN "separadorDeTexto();" ==============================








console.log("====> Pregunta 4");
// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

/*

    ---------------- Primera forma de resolver el ejercicio 4
    
    const repetirTexto = (texto = prompt("==> Ejercicio 4 : Ingresa texto que desea repetir."), cantidad = prompt("Ingrese la cantidad de veces que quiere repetir el texto.")) => 
    (!texto)
        ? console.warn("No has ingresado ninguna cadena de texto.")
        : (!cantidad)
            ? console.warn("No has ingresado la cantidad de veces que quiera que se repita el texto.")
            : console.info(`
            El texto ingresado es: "${texto}",
            el texto se repetirá: ${cantidad},
            y el resultado es: [${texto.repeat(cantidad)}]`)

*/

const repetirTexto = (texto = prompt("==> Ejercicio 4 : Ingresa texto que desea repetir."), cantidad = prompt("Ingrese la cantidad de veces que quiere repetir el texto.")) => {

    if(!texto) return console.warn("No has ingresado ninguna cadena de texto.");

    if(!cantidad) return console.warn("No has ingresado la cantidad de veces que quiera que se repita el texto.");

    if(cantidad == 0) return console.error("La cantidad ingresada no puede ser 0.");
    
    if(Math.sign(cantidad) === -1) return console.error("La cantidad ingresada no puede ser negativa.");

    for (let i = 1; i <= cantidad; i++) console.info(`Texto ingresado: "${texto}", ${i}`);
}







// ============================== DESCOMENTA LA FUNCIÓN "repetirTexto();" ==============================
// repetirTexto();
// ============================== DESCOMENTA LA FUNCIÓN "repetirTexto();" ==============================