interface Estudante {
    nome: string,
    endereco: {
        tipoLogradouro: TiposLogradouro,
        logradouro: string,
        numero: string,
        bairro: string
    },
    cidade: Cidade,
    dataNascimento: Date,
    dataCadastro: Date
}

enum TiposLogradouro{
    avenida = "Avenida",
    rua = "Rua",
    rodovia = "Rodovia",
    condominio = "Condomínio"
}

enum UF {
    Acre = "AC",
    Alagoas = "AL",
    Amapa = "AP",
    Amazonas = "AM",
    Bahia = "BA",
    Ceara = "CE",
    EspiritoSanto = "ES",
    Goias = "GO",
    Maranhao = "MA",
    MatoGrosso = "MT",
    MatoGrossoDoSul = "MS",
    MinasGerais = "MG",
    Para = "PA",
    Paraiba = "PB",
    Pernambuco = "PE",
    Piaui = "PI",
    RioDeJaneiro = "RJ",
    RioGrandeDoNorte = "RN",
    RioGrandeDoSul = "RS",
    Rondonia = "RO",
    Roraima = "RR",
    SantaCatarina = "SC",
    SaoPaulo = "SP",
    Sergipe = "SE",
    Tocantins = "TO"
}

interface Cidade {
    nome: string,
    uf: UF
}

let vilhena: Cidade = {
    nome: "Vilhena",
    uf: UF.Rondonia
}

let ariquemes: Cidade = {
    nome: "Ariquemes",
    uf: UF.Rondonia
}

let estudante: Estudante = {
    nome: "Matheus Lucas Batista",
    dataNascimento: new Date("2005-02-15"),
    endereco: {
        tipoLogradouro: TiposLogradouro.avenida,
        logradouro: "622",
        numero: "7426",
        bairro: "Jardim Araucária"
        },
    cidade: vilhena,
    dataCadastro: new Date()
};

console.log(`
        Nome: ${estudante.nome}
        Endereco: ${estudante.endereco.tipoLogradouro} ${estudante.endereco.logradouro}, N°${estudante.endereco.numero}, Bairro ${estudante.endereco.bairro}
        Cidade: ${estudante.cidade.nome },
        UF: ${estudante.cidade.uf},
        Nascimento: ${estudante.dataNascimento.getDate() + 1} / ${estudante.dataNascimento.getMonth() + 1} / ${estudante.dataNascimento.getFullYear()},
        Data de Cadastro: ${estudante.dataCadastro.getDate()} / ${estudante.dataCadastro.getMonth() + 1} / ${estudante.dataCadastro.getFullYear()}
    `)