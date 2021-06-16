console.log(" ");
console.log("------- Parámetros REST -------");

function sumar(a,b, ...c) {
    let resultado = a + b;

    c.forEach(function (n) {
        resultado += n;
    });

    return resultado;
}

console.log(sumar(10,10));
console.log(sumar(10,10,10));
console.log(sumar(10,10,10,10));
console.log(sumar(10,10,10,10,10));
console.log(sumar(10,10,10,10,10,10));
console.log(sumar(10,10,10,10,10,10,10));

const arreglo  = [10,20,30,40,50],
    arreglo2 = [60,70,80,90,100];
console.log(arreglo, arreglo2);

const arreglo3 = [...arreglo, ...arreglo2];
console.log(arreglo3);