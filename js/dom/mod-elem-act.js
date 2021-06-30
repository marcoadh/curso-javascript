/**
 * insertAdjacent
 * .insertAdjacentElement(position, el)
 * .insertAdjacentHTML(position,html)
 * .insertAdjacentText(position,text)
 * 
 * Posiciones:
 * beforebegin(hermano anterior)
 * afterbegin(primer hijo)
 * beforeend(último hijo)
 * afterend(hermano siguiente)
 */

const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure");

// $newCard.innerHTML = `
//     <img src="https://placeimg.com/200/200/any" alt="Any">
//     <figcaption></figcaption>
// `;

let $insertHTML = `
<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaption></figcaption>
`;

$newCard.classList.add("card");

$newCard.insertAdjacentHTML("beforeend", $insertHTML);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");
// $cards.insertAdjacentElement("afterbegin",$newCard);


/**
 * Prepend (Primer hijo)
 * Append (Último hijo)
 * Before (Hermano anterior)
 * After (Hermano posterior)
 */
$cards.append($newCard);
