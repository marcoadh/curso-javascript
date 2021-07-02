const $divsEventos = document.querySelectorAll(".eventos-flujo div");

function flujoEventos(e) {
    console.log(`Hola, te saluda ${this.className}, y el click lo originó ${e.target.className}`);
}

console.log($divsEventos);

$divsEventos.forEach((div) => {
    // Fase de burbuja
    // div.addEventListener("click", flujoEventos, false);

    // Fase de captura
    // div.addEventListener("click", flujoEventos, true);

    div.addEventListener("click", flujoEventos, {
        capture: true,
        once:true
    });
});