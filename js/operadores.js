// ---------- Operadores Aritméticos

let arit = 10 - 5 + (5 * 2) / 2;
let modulo = 12 % 5;
// console.log(arit);
// console.log(modulo);


// ---------- Operadores Relacionales
    // = 1 igual es asignación
    // == 2 iguales es comparación de valores (Considerado mala practica)
    // === 3 iguales es comparación de tipo de dato y de valor

// console.log(8 > 9);
// console.log(10 > 9);

// console.log(7 == 7);
// console.log("7" == 7);
// console.log(0 == false);

// console.log(7 === 7);
// console.log("7" === 7);
// console.log(0 === false);

// ---------- Incremento - Decremento

let i = 1;

// i = i + 2;
// i += 3;
// i -= 1;

// ---------- Operador Unario
i++;
i--;
// console.log(i);

// ---------- Operadores Lógicos
    // ! - Not :
        // Negar, es decir, lo que es verdadero, lo vuelve falso y viceversa.

    // || - Or :  
        // Cuando tenga 2 o más condiciones, con que una se cumpla, es decir que sea verdadera, el OR será verdadero.

    // && - And :
        // Cuando tenga 2 o más condiciones, todas tienen que cumplirse, es decir, que sean verdaderas, para que AND sea valide.

console.log(!true);
console.log(!false);

console.log((9 === 9 ) || ("9" === 9));
console.log((9 === 9 ) && ("9" === 9));