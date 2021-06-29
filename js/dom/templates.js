const $menu = document.getElementById("menu"),
    // Aquí genero el acceso al contenido del template-menu
    $template = document.getElementById("template-menu").content,
    // almacena dinámicamente la información en el fragmento
    $fragment = document.createDocumentFragment(),
    menuList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

menuList.forEach(elemento => {
    $template.querySelector("li").textContent = elemento;

    // Aquí clonamos la estructura
    const $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
});

$menu.appendChild($fragment);
