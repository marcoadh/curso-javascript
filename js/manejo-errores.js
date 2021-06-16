console.log(" ");
console.log("------- try - catch - finally -------")

try {
    //En el try se agrega el código a evaluar
    console.log("try");
    varError;
    console.log("try2");
} catch (error) {
    //El catch captura cualquier error surgido o lanzado en el try
    console.log("error");
    console.log(error);
} finally {
    //El bloque finally se ejecutará siempre al final de un bloque try-catch
    console.log("Siempre se imprimirá esta parte : finally");
}

console.log(" ");
console.log(" ");
console.log("------- Error personalizado -------")
try {
    let x = "s";

    if (isNaN(x)){ //---> si la variable "x" no es un número... {}
        throw new Error("El caractér introducido no es un Número.");
    }
    console.log(x * x);
} catch(error){
    console.log(`Se produjo el siguiente error ----> ${error}`);
}