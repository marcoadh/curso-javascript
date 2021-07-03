const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
    $linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(e) {
    console.log(`
        Hola, te saluda ${this}, y el click lo originó ${e.target.className}`
    );
}

document.addEventListener("click", (e) => {
    // Me indicaa que al dar click en alguna parte del body, me muestra lo que he seleccionado
    console.log("Click en ", e.target);

    if (e.target.matches(".eventos-flujo div")) {
        flujoEventos(e);
    }

    if (e.target.matches(".eventos-flujo a")) {
        e.preventDefault();
    }
});