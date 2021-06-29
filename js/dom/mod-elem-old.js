const $sectionCards = document.querySelector(".cards"),
    $nuevaCarta = document.createElement("figure"),
    $clonCarta = $sectionCards.cloneNode(true);

$nuevaCarta.innerHTML = `
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption>Any</figcaption>
`;

// $sectionCards.replaceChild($nuevaCarta, $sectionCards.children[1]);
// $sectionCards.removeChild($sectionCards.lastElementChild);
// $sectionCards.insertBefore($nuevaCarta, $sectionCards.firstElementChild);

document.body.appendChild($clonCarta);