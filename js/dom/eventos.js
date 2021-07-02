/* Manejador de Eventos */

function holaMundo(){
    alert("Hola mundo");
    console.log(event);
}

const $eventoSemantico = document.getElementById("evento-semantico"),
    $eventoMultiple = document.getElementById("evento-multiple");

$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = function(e) {
    alert("Hola mundo con manejador semántico.");
    console.log(e);
}

$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
    alert("Hola mundo con manejador multiple.");
    console.log(e);
});

/* Manejador de Eventos con parámetros */

function saludar(nombre = "Desconocid@"){
    alert(`Hola ${nombre} - ${event}`);
}

$eventoMultiple.addEventListener("click", () => saludar());

/* Removiendo Eventos */

const $eventoRemover = document.getElementById("evento-remover");

const removerEventoClick = (e) => {
    alert(`Removiendo el evento de tipo ${e.type}`);
    console.log(e);
    $eventoRemover.removeEventListener("click", removerEventoClick);
    // $eventoRemover.disabled = true;
}

$eventoRemover.addEventListener("click", removerEventoClick);