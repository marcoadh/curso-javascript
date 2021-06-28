const $linkDOM = document.querySelector(".dom-link");

// Diferentes manera de obtener los estilos
// con ".style"
// con ".getAttribute("style")"
// con ".getComputedStyle($linkDOM)" 
// Dato: getComputedStyle permite acceder a las propiedades mapeadas de algún elemento

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);

// Cada propiedad le asigna un índice
console.log(window.getComputedStyle($linkDOM));

console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

// Accediendo a los estilos de la etiqueta "a" con clase .dom-link
$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.display = "block";
$linkDOM.style.width = "50%";
$linkDOM.style.margin = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.textAlign = "center";
$linkDOM.style.borderRadius = ".5rem";


console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(getComputedStyle($linkDOM));

/**
 * 
 * Variables CSS - custom Properties CSS
 * 
*/

const $html = document.documentElement,
        $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--color-dark");
let varYellowColor = getComputedStyle($html).getPropertyValue("--color-yellow");

console.log(varDarkColor);
console.log(varYellowColor);

$body.style.background = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--color-yellow", "pink");
varYellowColor = getComputedStyle($html).getPropertyValue("--color-yellow");
// $body.style.color = varYellowColor;
$body.style.setProperty("color", varYellowColor);