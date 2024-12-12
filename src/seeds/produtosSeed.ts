import { Produto } from "../models/produto";
import * as uuid from 'uuid'

let smartphone: Produto = {
    id: uuid.v4(),
    nome: 'iPhone 15 Pro Max',
    descricao: 'O smartphone mais poderoso do mercado',
    preco: 12000,
    dataCadastro: new Date('2024-11-20')
};

// Produto 2: Televisão
let televisao: Produto = {
    id: uuid.v4(),
    nome: 'Samsung QLED 55 polegadas',
    descricao: 'Qualidade de imagem excepcional',
    preco: 8000,
    dataCadastro: new Date('2023-05-15')
};

// Produto 3: Notebook
let notebook: Produto = {
    id: uuid.v4(),
    nome: 'MacBook Pro 16 polegadas',
    descricao: 'O notebook ideal para profissionais',
    preco: 15000,
    dataCadastro: new Date('2024-09-01')
};

export let produtos: Produto[] = [smartphone, televisao, notebook];