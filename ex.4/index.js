//Clonando Objetos
const produto = {
    nome : 'caneta bic preta',
    preco : 1.90,
    desconto : 0.05
}
function clone(objeto){
    return {...objeto}
}

const novoProduto = clone(produto)
novoProduto.nome = 'Caneta Bic Azul'
novoProduto.preco = 1.85

console.log(produto,novoProduto)