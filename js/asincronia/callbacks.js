//Función de Tipo CallBack
function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(x, y, functionCallback){
    let resultado = x + y;
    functionCallback(`Resultado: ${resultado}`);
}

sumar(10, 25, imprimir);


console.log(" ");
console.log(" ");


function cuadradoCallback (value, callback) {
    setTimeout(() => callback(value, value * value) , 1000);
}

cuadradoCallback(1, (value, resultado) => {
    console.log("Iniciando Callback");
    console.log(`Callback: ${value}, ${resultado}`);
    cuadradoCallback(10, (value, resultado) => {
        console.log(`Callback: ${value}, ${resultado}`);
        cuadradoCallback(20, (value, resultado) => {
            console.log(`Callback: ${value}, ${resultado}`);
            cuadradoCallback(30, (value, resultado) => {
                console.log(`Callback: ${value}, ${resultado}`);
                cuadradoCallback(40, (value, resultado) => {
                    console.log(`Callback: ${value}, ${resultado}`);
                    cuadradoCallback(50, (value, resultado) => {
                        console.log(`Callback: ${value}, ${resultado}`);
                        cuadradoCallback(60, (value, resultado) => {
                            console.log(`CallBack: ${value}, ${resultado}`);
                        });
                    });
                });
            });
        });
    });
});


// console.log(" ");
// console.log(" ");

// let reloj = () => {
//     let fecha = new Date();
//     console.log(`Hora actual: ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
// }

// setInterval(reloj, 1000);