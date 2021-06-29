const $queEsDOM = document.getElementById("que-es");
let parrafo = `
    <p>
        El Modelo de Objetos del Documento (<b><i> DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
    </p>
    <p>
        Este proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
        <mark>
            El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.
        </mark>
    </p>
`;

// innerText fue creado para internet explorer, no se usa
// $queEsDOM.innerText = parrafo;

// textContent fue creado para los demás navegadores
$queEsDOM.textContent = parrafo;

// Inserta contenido HTML
$queEsDOM.innerHTML = parrafo;

// Reemplaza el código HTML
$queEsDOM.outerHTML = parrafo;
