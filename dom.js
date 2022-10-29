document.getElementById("buscador").addEventListener("submit", pesquisarFilme)

function pesquisarFilme(e){
const filmePesquisa = document.getElementById("buscar").value;
buscarFilmes(filmePesquisa)
e.preventDeFault();
}

function buscarFilmes(filmePesquisa){
    
}