// Promesas
let variablePromesa = new Promise((resolver, rechazar) => {
    let variableBoolean = false;
    if(variableBoolean)
        resolver("la expresión es verdadero");
    else
        rechazar("La expresión es falso.");
});

variablePromesa
.then(valor => console.log(valor))
.catch(error => console.log(error));

console.log("                           -                           ");
console.log("                           -                           ");



const cuadradoPromesa = valor => {
    if ( typeof valor !== "number")
        return Promise.reject(`¡Error!, el valor "${valor}" no es un número.`);
    else
        return new Promise((resolver, rechazar) => {
            setTimeout(() => {
                resolver({
                    valor,
                    resultado: valor * valor
                });
            }, 0 | Math.random() * 100);
        });
};

cuadradoPromesa(0)
.then(obj => {
    console.log("");
    console.log("--------------------------------------------------------------");
    console.log("--------------------------------------------------------------");
    console.log("");
    console.log("Inicio de la Promesa");
    console.log(`Promesa: ${obj.valor}, ${obj.resultado}`);
    // console.log(obj);
    return cuadradoPromesa(1);
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
    return cuadradoPromesa(6);
    // return cuadradoPromesa("6");
})
.then(obj => {
    console.log(`Promesa: ${obj.valor}, ${obj.resultado}`);
    return cuadradoPromesa(7);
})
.then(obj => {
    console.log(`Promesa: ${obj.valor}, ${obj.resultado}`);
    console.log("Fin de la Promesa.");
    // console.log("");
    // console.log("--------------------------------------------------------------");
    // console.log("--------------------------------------------------------------");
    // console.log("");
})
.catch(err => console.error(err));

