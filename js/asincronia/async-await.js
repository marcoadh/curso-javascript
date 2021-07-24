function cuadradoPromesa(valor) {
    if (typeof valor !== "number") {
        return Promise.reject(`Error, el valor "${valor}" ingresado no es un número.`);
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                valor,
                resultado: valor * valor
            });
        }, 0 | Math.random() * 100);
    });
}

async function funcionAsincronaDeclarada() {
    try {
        console.log("Inicio de Async Función Declarada.");
        let obj = await cuadradoPromesa(0);
        console.log(`Async Function D: ${obj.valor}, ${obj.resultado}`);

        obj = await cuadradoPromesa(1);
        console.log(`Async Function D: ${obj.valor}, ${obj.resultado}`);

        obj = await cuadradoPromesa(2);
        console.log(`Async Function D: ${obj.valor}, ${obj.resultado}`);

        obj = await cuadradoPromesa(3);
        console.log(`Async Function D: ${obj.valor}, ${obj.resultado}`);

        obj = await cuadradoPromesa(4);
        console.log(`Async Function D: ${obj.valor}, ${obj.resultado}`);

        obj = await cuadradoPromesa(5);
        console.log(`Async Function D: ${obj.valor}, ${obj.resultado}`);
        console.log("Fin de Async Función Declarada.")
    } catch (err) {
        console.error(err);
    }
}

// funcionAsincronaDeclarada();


const funcionAsincronaExpresada = async () => {
    try {
        console.log("Inicio de Async Función Expresada.");
        let obj = await cuadradoPromesa(6);
        console.log(`Async Function E: ${obj.valor}, ${obj.resultado}`);

        obj = await cuadradoPromesa(7);
        console.log(`Async Function E: ${obj.valor}, ${obj.resultado}`);

        obj = await cuadradoPromesa(8);
        console.log(`Async Function E: ${obj.valor}, ${obj.resultado}`);

        obj = await cuadradoPromesa(9);
        console.log(`Async Function E: ${obj.valor}, ${obj.resultado}`);

        obj = await cuadradoPromesa(10);
        console.log(`Async Function E: ${obj.valor}, ${obj.resultado}`);
        console.log("Fin de Async Función Expresada.")
    } catch (err) {
        console.error(err);
    }
}

// funcionAsincronaExpresada();

const funcionConPromesaAwaitTimeout = async () => {
    console.log("Iniciando función Asíncrona");
    let miPromesa = new Promise(resolver => {
        setTimeout(() => {
            resolver(`Promesa con await y setTimeout`)
        }, 3000);
    });
    
    console.log(await miPromesa);
    console.log("Finalizando función Asíncrona");
}

// funcionConPromesaAwaitTimeout();