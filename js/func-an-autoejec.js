console.log("<---------- Funciones anónimas auto ejecutables ---------->");
console.log("");

(function () {
    console.log("Mi primer IIFE");
})();


(function (d,w,c) {
    console.log("Mi segundo IIFE");
    console.log(d);
})(document,window,console);

// Clásica
(function () {
    console.log("La versión clásica");
})();

// La Crockford (JavaScript The Good Parts)
((function (){
    console.log("La versión Crockford");
})());

// Unaria
+function () {
    console.log("La versión Unaria");
}();

// Facebook
!function () {
    console.log("La versión Facebook");
}();