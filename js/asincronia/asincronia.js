console.log("-------- Asíncrono --------");
console.log("");

// Código Síncrono bloqueante
(() => {
    console.log("Código Síncrono");
    console.log("Inicio");

    function tres() {
        console.log("Tres");
    }

    function uno() {
        console.log("Uno");
        dos();
        tres();
    }

    function dos() {
        console.log("Dos");
    }


    uno();
    console.log("Fin");
})();

console.log("");


// Código Asíncrono no bloqueante
// (() => {
//     console.log("Código Asíncrono");
//     console.log("Inicio");

//     function dos() {
//         setTimeout(function (){
//             console.log("Dos");
//         }, 1000);
//     }

//     function uno() {
//         setTimeout(function (){
//             console.log("Uno");
//         }, 0);
//         dos();
//         console.log("Tres");
//     }

//     uno();
//     console.log("Fin");
// })();


(() => {
    console.log("Código Asíncrono 2");
    console.log("Inicio");

    function dos() {
        setTimeout(function (){
            console.log("Dos");
        }, 1000);
    }

    function tres() {
        setTimeout(function (){
            console.log("Cuatro")
        }, 2000);
    }

    function uno() {
        setTimeout(function (){
            console.log("Uno");
        }, 0);
        dos();
        tres();
        console.log("Tres");
    }

    uno();
    console.log("Fin");
})();