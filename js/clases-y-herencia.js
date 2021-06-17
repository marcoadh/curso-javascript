console.log("<-------------- Clases y Herencia -------------->");
console.log("");

class Persona {
    // El constructor es un método especial que se ejecuta al momento  de crear objetos de este tipo.
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }

    // Métodos
    despertar () {
        console.log("Despertarse a las 7 AM");
    }
    ejercicio () {
        console.log("Ejercitarse a las 8 AM, yendo a correr en un parque.");
    }
}

class Hombre extends Persona {
    constructor(nombre, apellido, edad){
        // Super() es un método que manda a llamar el constructor de la clase padre
        super(nombre,apellido);
        this.edad = edad;
    }

    ejercicio() {
        console.log("Ejercitarse a las 6 PM, yendo a un parque a correr.");
    }

    jugar() {
        console.log("Jugar solo si hay tiempo libre a las 8 PM.");
    }
}

const juan = new Hombre("Juan Daniel", "Salas Mendoza", 24),
    rosa = new Persona("Rosa Lisa", "Rodriguez Lozano");

console.log(rosa);
console.log(juan);