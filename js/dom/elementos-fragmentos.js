const $menu = document.getElementById("menu"),
    $li = document.createElement("li"),
    $liTexto = document.createTextNode("Li más");

// $li.appendChild($liTexto);
// $menu.appendChild($li);



/* ------------------------------  ------------------------------ */

const numeros = [1,2,3,4,5,6,7,8,9,10];

numeros.forEach((elemento) => {
    const $li2 = document.createElement("li");
    $li2.textContent = elemento;
    $menu.appendChild($li2);
});


/* ------------------------------  ------------------------------ */


const estaciones = ["Primavera", "Invierno", "Otoño", "Verano"],
    $newUl = document.createElement("ul");
    
estaciones.forEach(elem => {
    const $newLi = document.createElement("li");
    $newLi.textContent = elem;
    $newUl.appendChild($newLi);
});

// Esta parte no es la manera correcta 
document.write("<h2>Otra lista</h2>");
document.body.appendChild($newUl);


/* ------------------------------  ------------------------------ */

const mesesDelAño = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
    $ulMeses = document.createElement("ul"),
    $fragment = document.createDocumentFragment();

mesesDelAño.forEach(elemento => {
    const $li = document.createElement("li");
    $li.textContent = elemento;
    $fragment.appendChild($li);
});

document.write("<h2>Nueva lista de prueba con fragmentos</h2>");
document.write("<h3>Meses del Años</h3>");
$ulMeses.appendChild($fragment);
document.body.appendChild($ulMeses);