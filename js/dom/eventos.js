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