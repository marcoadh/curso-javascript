// Promesas

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

cuadradoPromesa(0)
    .then(obj => {
        // console.log(obj);
        console.log("Inicio de la Promesa");
        console.log(`Promesa: ${obj.valor}, ${obj.resultado}`);
        return cuadradoPromesa("2");
    })
    .then(obj => {
        console.log(`Promesa: ${obj.valor}, ${obj.resultado}`);
        return cuadradoPromesa(2);
    })
    .then(obj => {
        console.log(`Promesa: ${obj.valor}, ${obj.resultado}`);
        return cuadradoPromesa(2);
    })
    .then(obj => {
        console.log(`Promesa: ${obj.valor}, ${obj.resultado}`);
        return cuadradoPromesa(3);
    })
    .then(obj => {
        console.log(`Promesa: ${obj.valor}, ${obj.resultado}`);
        return cuadradoPromesa(4);
    })
    .then(obj => {
        console.log(`Promesa: ${obj.valor}, ${obj.resultado}`);
        return cuadradoPromesa(5);
    })
    .then(obj => {
        console.log(`Promesa: ${obj.valor}, ${obj.resultado}`);
        console.log("Fin de la Promesa.");
    })
    .catch(err => console.error(err));