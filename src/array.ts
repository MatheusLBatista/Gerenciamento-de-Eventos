let nomes: string[] = ["Maria", "João", "Ana", "Pedro"];

console.log(nomes);

//percorre o array nome
nomes.forEach(function (nome) {
    console.log(nome)
})

//arrow function
nomes.forEach(nome => console.log(nome));

interface Produto {
    descricao: string,
    preco:     number
}

let meusProdutos: Produto[] = [
    { descricao: "Sabão em pó", preco: 15.60 },
    { descricao: "Pão de sal",  preco: 5.0 },
    { descricao: "Kit Kat",     preco: 2.5 }
]

console.log(meusProdutos.length)
console.log(meusProdutos[2]);

meusProdutos.forEach(descricaoProduto => console.log(descricaoProduto.descricao));

let produtosSelecionados: Produto[] = meusProdutos.filter(produto => produto.preco >= 5)
console.log(produtosSelecionados)