let contato = document.querySelector("#contato");
let containerLinks = document.querySelector(".container")
let containerContato = document.querySelector(".container_contato")
let voltar = document.querySelector("#voltar")

let mudarPagina=(e)=>{
    e.preventDefault()
containerLinks.classList.add("active")
containerContato.classList.add("disable")
}

let voltarPagina=(e)=>{
    e.preventDefault()
containerLinks.classList.remove("active")
containerContato.classList.remove("disable")
}


contato.addEventListener("click", mudarPagina)
voltar.addEventListener("click", voltarPagina)
