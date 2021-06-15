
// Función Declarada

function estoEsUnaFuncion() {
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");

    return "Esta función va a devolver una cadena de texto";
}

// Invocación de Función
// estoEsUnaFuncion();

let funcionVariable = estoEsUnaFuncion();

// console.log(funcionVariable);

function saludar(nombre, apellido) {
    console.log(`Hola, mi nombre es ${nombre} y mi apellido es ${apellido}`);
}

saludar("Marco", "De la cruz");


// Funciones declaradas vs Funciones expresadas
funcionDeclarada();

function funcionDeclarada() {
    console.log("Esto es una función declarada, puede invocarse en cualquier parte de nuestro código, incluso antes de que se declare la función.");
}

funcionDeclarada();



// funcionExpresada();

    // Función anónima
const funcionExpresada = function() {
    console.log("Esto es una función expresada, no puede invocarse en cualquier parte de nuestro código, debe respetar un orden.");
}

funcionExpresada();