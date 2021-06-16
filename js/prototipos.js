/*
    Programación Orientado a Objetos

    Clases      => Modelo a seguir.
    Objetos     => Es una instancia de una clase.
     Atributos   => Carácteristica o propiedad del objeto.
                    (Son variables dentro de un objeto).
     Métodos     => Son las acciones que un objeto puede realizar.
                    (Son funciones dentro de un objeto).
*/

console.log("<-------------- Prototipos -------------->");
console.log("");

/*
// Función constructora con los métodos en el constructor
function Animal(nombre, genero, raza) {
    // Atributos
    this.nombre = nombre;
    this.genero = genero;
    this.raza = raza;

    // Métodos
    this.sonar = function() {
        console.log("Haciendo ruidos al jugar.");
    }

    this.saltar = function() {
        console.log("Salto de felicidad.");
    }
}

const   doggy = new Animal("Doggy", "Macho", "Labrador"),
        rocky = new Animal("Rocky", "Macho", "Doble raza");

console.log(doggy);
console.log(rocky);

doggy.sonar();
rocky.saltar();
*/


// Función constructora con los métodos en el prototipo
function Animal(nombre, genero, raza) {
    // Atributos
    this.nombre = nombre;
    this.genero = genero;
    this.raza = raza;
}
// Métodos agregados en el prototipo de la funcíón constructura "Animal"
Animal.prototype.sonar = function() {
    console.log("Haciendo ruidos al jugar.");
}

Animal.prototype.saltar = function() {
    console.log("Salto de felicidad.");
}

const   doggy = new Animal("Doggy", "Macho", "Labrador"),
        rocky = new Animal("Rocky", "Macho", "Doble raza");

console.log(doggy);
console.log(rocky);

doggy.sonar();
rocky.saltar();