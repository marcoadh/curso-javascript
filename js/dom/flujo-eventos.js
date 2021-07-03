const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
    $linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(e) {
    console.log(`Hola, te saluda ${this.className}, y el click lo originó ${e.target.className}`);
    e.stopPropagation();
}


// console.log($divsEventos);
// console.log($linkEventos);

$divsEventos.forEach((div) => {
    
    // Fase de burbuja
    div.addEventListener("click", flujoEventos, false);
    
    // Fase de captura
    // div.addEventListener("click", flujoEventos, true);
    
    // div.addEventListener("click", flujoEventos, {
    //     capture: false,
    //     once:true
    // });
});

/* stopPropagation y preventDefault */

$linkEventos.addEventListener("click", (e) => {
    alert("Acabas de dar click al enlace.");
    e.preventDefault();
    e.stopPropagation();
});