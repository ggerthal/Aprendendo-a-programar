const todoList = document.getElementById("lisPreencher")
const todoForm = document.getElementById("topo")
const todoInput = document.getElementById("oQueFaz")
const itens = document.querySelector('.item')
const tema = document.getElementById("alterTema")

todoForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const texto = todoInput.value
    const item = document.createElement("li")
    item.classList.add('item')
    item.innerText = texto
    todoList.appendChild(item)

    item.addEventListener("click", () => {
        item.classList.toggle("marcado")
    })
})

tema.addEventListener("click", () => {
    .classList.toggle("temaDark")
    
})