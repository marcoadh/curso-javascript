
const $linkDOM = document.querySelector(".dom-link");

console.log($linkDOM);
console.log($linkDOM.className);
console.log($linkDOM.classList);
console.log("---------------------------------------------");
console.log($linkDOM.classList.contains("rotate-45"));
$linkDOM.classList.add("rotate-45");
console.log($linkDOM.classList.contains("rotate-45"));
$linkDOM.classList.toggle("rotate-45");
console.log($linkDOM.classList.contains("rotate-45"));
$linkDOM.classList.toggle("rotate-45");
console.log($linkDOM.classList.contains("rotate-45"));
$linkDOM.classList.replace("rotate-45","rotate-135");
$linkDOM.classList.remove("rotate-135");
