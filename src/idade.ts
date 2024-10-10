function calcularIdade(anoNascimento: number){
    const dataAtual = new Date().getFullYear();
    let idade = dataAtual - anoNascimento;
    return idade;
}

console.log(`Sua idade: ${calcularIdade(2005)}`)