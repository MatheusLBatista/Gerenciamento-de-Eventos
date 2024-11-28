import {v4 as uuid} from 'uuid';

interface Produto {
    id: string,
    nome: string,
    preco: number
}

let produtos: Produto [] = [
    {id: 'uuid1', nome: 'Sabão em pó', preco: 15.52},
    {id: 'uuid2', nome: 'Sabão em barra', preco: 20.00},
]

function view (produtos: Produto){
    console.log(`Produto: ${produtos.nome} (R$ ${produtos.preco.toFixed(2)})`)
}

produtos.forEach(view);