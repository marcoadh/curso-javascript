console.log("=========> Tipo de Dato: Proxy");
console.log("");

const persona = {
    nombre: "",
    apellido: "",
    edad:0
};

const handler = {
    set(obj, propiedad, valor) {
        if (Object.keys(obj).indexOf(propiedad) === -1) {
            return console.error(`La propiedad "${propiedad}" no existe en el objeto persona.`);
        }

        if (
            (propiedad === "nombre" || propiedad === "apellido") && 
            !(/^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g.test(valor))
        ){
            return console.error(`La propiedad "${propiedad}" solo acepta letras y espacios en blanco`);
        }

        obj[propiedad] = valor;

    }
}



const marco =  new Proxy(persona, handler);
marco.nombre = "Marco Antonio";
// marco.nombre = "Marco Antonio2";
marco.apellido = "De la cruz Henriquez";
marco.edad = 24;
// marco.correo = "marco@gmail.com";

console.log(marco);

console.log(persona);