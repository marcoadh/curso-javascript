console.log(" ");
console.log("       ------- Objetos Literales -------");
/**
 * Los objetos literales es una nueva forma de escribir
 * atributos/propiedades o métodos
 * e incluso de asignarlos
 */

console.log("");
console.log("-----> Objeto sin las características nuevas");

let nombre  = "Junior Luis",
    edad    = 23;

const persona = {
    nombre      : nombre,
    edad        : edad,
    trabajar    : function() {
        console.log("Trabajo de 8 AM hasta las 2 PM");
    }
};

console.log(persona);
persona.trabajar();



console.log("");
console.log("-----> Objetos Literales ");

const vecino = {
    nombre,
    apellido : "Silva",
    edad,
    trabajar() {
        console.log("Trabajo de 8 AM hasta las 4 PM");
    },
    cocinar() {
        console.log("Hoy cocinaré Arroz con pollo!!");
    }   
}

console.log(vecino);
vecino.trabajar();
vecino.cocinar();
