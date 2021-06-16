console.log(" ");
console.log("------- Sin destructuración -------");
console.log("--> Ejemplo con un arreglo");

const arreglo = [1,2,3];

let uno  = arreglo[0],
    dos  = arreglo[1],
    tres = arreglo[2];

console.log(uno,dos,tres);




console.log(" ");
console.log("------- Con destructuración -------");
console.log("--> Ejemplo con un objeto");
// la variable que se va a crear, tiene que ser igual al nombre de la propiedad, sino saldrá undefined

let yo = {
    nombre: "Marco Antonio",
    apellido: "De la cruz Henriquez",
    edad: 24,
    estudiante: true
};

let {nombre, apellido, edad, estudiante} = yo;

console.log(nombre, apellido, edad);

let mensaje;

if (estudiante === true) {
    mensaje = "Si, si soy estudiante";
}
else {
    mensaje = "No, no soy estudiante";
}

console.log(`
    Hola mucho gusto, me llamo ${nombre} ${apellido},
    mi edad es ${edad}.
    Quieres saber si soy estudiante? Pues... 
    ${mensaje}.
`);