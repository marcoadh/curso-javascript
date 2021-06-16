function Animal(nombre, genero) {
    // Atributos
    this.nombre = nombre;
    this.genero = genero;
}
// Métodos agregados en el prototipo de la funcíón constructura "Animal"
Animal.prototype.sonar = function() {
    console.log("Haciendo ruidos al jugar.");
}

Animal.prototype.saltar = function() {
    console.log("Salto de felicidad.");
}

console.log("");
console.log("<-------------- Herencia Prototípica -------------->");
console.log("");

function Perro(nombre, genero, raza, tamanio) {
    this.super = Animal;
    this.super(nombre, genero);
    this.raza = raza;
    this.tamanio = tamanio;
}

// Perro está heredando de Animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

// Sobreescribir el método del Prototipo padre en el hijo
Perro.prototype.saltar = function() {
    console.log("Estoy saltando de felicidad debido a que acabo de jugar.");
}
// Crear un nuevo método en el prototipo de Perro.
Perro.prototype.ladrar = function() {
    console.log("Guau guau!!");
}

const rocko = new Perro("Rocko","Macho","Criollo","Grande"),
pino  = new Animal("Pino", "Hembra");

console.log(pino);
console.log(rocko);

console.log("                      ");
console.log("                      ");

pino.sonar();
pino.saltar();

console.log("                      ");

rocko.sonar();
rocko.saltar();
rocko.ladrar();