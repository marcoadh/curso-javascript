window.addEventListener("resize", (e) => {
    console.clear();
    console.log("--------- Evento Resize ---------");
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(`Anchura de la pantalla: ${window.outerWidth}`);
    console.log(`Altura de la pantalla: ${window.outerHeight}`);
    console.log(e);
});

window.addEventListener("scroll", (e) => {
    console.clear();
    console.log("--------- Evento Scroll ---------");
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
});

window.addEventListener("load", (e) => {
    // console.clear();
    console.log("--------- Evento Load ---------");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
});

document.addEventListener("DOMContentLoaded", e => {
    // console.clear();
    console.log("--------- Evento DOMContentLoaded ---------");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
});