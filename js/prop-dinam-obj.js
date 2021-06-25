console.log("=========>Propiedades dinámicas de los Objetos.");
console.log("");

// Es un nuevo mecanismo de generar los nombres de las propiedades de manera dinámica en un objeto

let propiedadAleatoria = Math.round(Math.random() * 100 + 5)

const objUsuarios = {
    // Creación normal
    // propiedad : "valor"
    [`id_${propiedadAleatoria}`] : "Valor Aleatorio"
};

const usuarios = ["Marco", "Monica", "Pedro", "Isabel", "Jose"];

usuarios.forEach((usuarios, index) => objUsuarios[`id_${index}`] = usuarios);

console.log(objUsuarios);