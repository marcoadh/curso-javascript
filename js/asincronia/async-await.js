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
        console.log("Inicio de Async Function.");
        let obj = await cuadradoPromesa(0);
        console.log(`Async Function: ${obj.valor}, ${obj.resultado}`);

        obj = await cuadradoPromesa(1);
        console.log(`Async Function: ${obj.valor}, ${obj.resultado}`);

        obj = await cuadradoPromesa(2);
        console.log(`Async Function: ${obj.valor}, ${obj.resultado}`);

        obj = await cuadradoPromesa("3");
        console.log(`Async Function: ${obj.valor}, ${obj.resultado}`);

        obj = await cuadradoPromesa(4);
        console.log(`Async Function: ${obj.valor}, ${obj.resultado}`);

        obj = await cuadradoPromesa(5);
        console.log(`Async Function: ${obj.valor}, ${obj.resultado}`);
        console.log("Fin de Async Function.")
    } catch (err) {
        console.error(err);
    }
}

funcionAsincronaDeclarada();


const funcionAsincronaExpresada = async () => {
    try {
        console.log("Inicio de Async Function.");
        let obj = await cuadradoPromesa(6);
        console.log(`Async Function: ${obj.valor}, ${obj.resultado}`);

        obj = await cuadradoPromesa(7);
        console.log(`Async Function: ${obj.valor}, ${obj.resultado}`);

        obj = await cuadradoPromesa("8");
        console.log(`Async Function: ${obj.valor}, ${obj.resultado}`);

        obj = await cuadradoPromesa(9);
        console.log(`Async Function: ${obj.valor}, ${obj.resultado}`);

        obj = await cuadradoPromesa(10);
        console.log(`Async Function: ${obj.valor}, ${obj.resultado}`);
        console.log("Fin de Async Function.")
    } catch (err) {
        console.error(err);
    }
}

funcionAsincronaExpresada();