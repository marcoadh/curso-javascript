// let texto = "Hola mundo, soy marco de la cruz";

// const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

// hablar(texto);

console.log(document.body);

// Ya no se utilizan mucho
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("titulo1"));
console.log(document.getElementsByName("nombre"));
// Ya no se utilizan mucho

console.log(document.getElementById("menu"));

console.log("");

console.log(document.querySelector("#menu"));
console.log(document.querySelector("li"));
console.log(document.querySelectorAll("li"));
console.log(document.querySelectorAll("li").length);

console.log("");

document.querySelectorAll("li").forEach((el) => console.log(el));