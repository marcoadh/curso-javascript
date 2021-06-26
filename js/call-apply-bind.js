console.log("=========> Call - Apply - Bind");
console.log("");

this.lugar = "Contexto Global";
function saludar(mensaje, receptor) {
    console.log(`${mensaje} ${receptor}, desde ${this.lugar}`);
}
saludar("Buenos días", "Francis");
console.log("");

// Creando objeto1
const objeto1 = {
    lugar: "Contexto Objeto 1"
}
saludar.call(objeto1, "Buenas tardes", "Rosa");
saludar.call(null, "Buenas tardes", "Rosa");
saludar.call(this, "Buenas tardes", "Rosa");

console.log("");
saludar.apply(objeto1, ["Buenas noches", "Liz"]);
saludar.apply(null, ["Buenas noches", "Liz"]);
saludar.apply(this, ["Buenas noches", "Liz"]);
console.log("");

this.nombre = "Window";

const persona = {
    nombre : "Marco Antonio",
    saludar: function(){
        console.log(`Hola ${this.nombre}`);
    }
}
persona.saludar();
console.log("");

const otraPersona = {
    // saludar: persona.saludar.bind(this)
    saludar: persona.saludar.bind(persona)
}
otraPersona.saludar();