


function adicionaItem(event) {
    const container = document.getElementById("container")
    const outroItem = document.createElement("article")
    outroItem.classList.add("item-2")
    const textArticle = document.createTextNode("Consegui fazer!!!")
    outroItem.appendChild(textArticle)
    container.insertAdjacentElement("beforeend", outroItem)
    outroItem.setAttribute("onclick", "removeItem(event)")
}

function removeItem(event) {
    event.target.remove()
}