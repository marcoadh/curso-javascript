// No se utiliza mucho 
// const x = new Object();

// console.log(x);
// No se utiliza mucho 


 /*
    Dentro de un objeto, las variables se le llamarán atributos o propiedades y a la funciones se les llamará métodos.
 */
const yo = {
    nombre: "Marco",
    apellido: "De la cruz",
    edad: 24,
    gustos: ["comer", "estudiar", "jugar"],
    soltero: true,
    contacto: {
        email: "marco@gmail.com",
        instagram: "marcoooooo",
        celular: 987654321
    },
    saludar: function(){
        console.log("Hola pues");
    },
    decirMiNombre: function(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }
};

console.log(yo);
console.log(yo["nombre"]);
console.log(yo["apellido"]);
console.log(yo.nombre);
console.log(yo.apellido);
console.log(yo.edad);
console.log(yo.soltero);
console.log(yo.gustos);
console.log(yo.gustos[0]);
console.log(yo.contacto.instagram);
yo.saludar();
yo.decirMiNombre();

console.log(Object.keys(yo));
console.log(Object.values(yo));
console.log(yo.hasOwnProperty("nombre"));
console.log(yo.hasOwnProperty("año"));