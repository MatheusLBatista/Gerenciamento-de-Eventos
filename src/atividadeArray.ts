interface Pessoa {
    nome:  string,
    idade: number
}

let pessoas: Pessoa [] = [
    { nome: "Matheus",  idade: 19 },
    { nome: "Giullia",  idade: 61 },
    { nome: "Danielle", idade: 90 },
]

let maiorDezoito = pessoas.filter(pessoa => pessoa.idade >= 18);
console.log(maiorDezoito)

let maiorSessenta = pessoas.filter(pessoa => pessoa.idade >= 60);
console.log(maiorSessenta)

let cores = ["Azul", "Amarelo", "Verde", "Vermelho"];

cores.forEach(cor => console.log("Cor: "+cor+"\nQuantidade de letras: "+cor.length))