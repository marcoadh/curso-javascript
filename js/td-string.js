

// Cadenas de Texto --> String

let nombre      = "Marco";
let apellido    = "De la cruz";
let saludo      = "Hola, soy";
let lorem       = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid laudantium architecto aliquam earum aut, quod consequuntur id qui est distinctio ab voluptatibus dolor nulla pariatur hic, repellat deserunt maiores repellendus!";

console.log(nombre, apellido, saludo);

// Propiedad length, uppercase -> mayuscula, lowercase -> minuscula
console.log(nombre.length, apellido.length, saludo.length, nombre.toUpperCase(), apellido.toLowerCase());

// includes -> buscar
console.log(lorem.includes("Lorem"));

// -------------------------------- Concatenación

let saludando = saludo + " " + nombre + " " + apellido + ".";

console.log(saludando);

// -------------------------------- Interpolación de variables / Template String 
let saludando2 = `Hola, mi nombre es ${nombre} ${apellido}`;

console.log(saludando2);

let ul = `
    <ul>
        <li>Primavera</li>
        <li>Verano</li>
        <li>Otoño</li>
        <li>Invierno</li>
    </ul>
`;

console.log(ul);

