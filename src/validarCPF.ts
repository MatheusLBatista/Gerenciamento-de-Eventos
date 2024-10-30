let cpf: string = "01162809213";

function validarCPF(cpf: string){

    if(cpf.length !== 11){
        console.log("CPF inválido!");
        return false;
    }

    let cpfNumber = cpf.split('').map(Number).slice(0, 9);
    let somaPrimeiro: number = 0;
    let somaSegundo: number = 0;

    for(let i = 0 ; i < cpfNumber.length; i ++){
        let multiplicaPrimeiro: number = cpfNumber[i] * (10 - i);
        somaPrimeiro += multiplicaPrimeiro;
    }

    somaPrimeiro = somaPrimeiro % 11;
    somaPrimeiro = 11 - somaPrimeiro;
    somaPrimeiro = somaPrimeiro >= 10 ? somaPrimeiro = 0 : somaPrimeiro;

    cpfNumber.push(somaPrimeiro);

    for(let i = 0; i < cpfNumber.length; i++){
        let multiplicaSegundo = cpfNumber[i] * (11 - i);
        somaSegundo += multiplicaSegundo;
    }

    somaSegundo = somaSegundo % 11;
    somaSegundo = 11 - somaSegundo;
    somaSegundo = somaSegundo >= 10 ? somaSegundo = 0 : somaSegundo;
  
    cpfNumber.push(somaSegundo);

    if(somaPrimeiro === parseInt(cpf[9]) && somaSegundo === parseInt(cpf[10])){
        console.log("CPF válido!");
        return true;
    }
    else{
        console.log("CPF inválido!");
        return false;
    }
}

function estadoCPF(cpf: string){
    if (cpf.length !== 11) {
        return "CPF inválido!";
    }

    let estado: string = '';

    switch (cpf[8]) {
        case "0":
            estado = "Rio Grande do Sul";
            break;
        case "1":
            estado = "Distrito Federal, Goiás, Mato Grosso, Mato Grosso do Sul e Tocantins";
            break;
        case "2":
            estado = "Amazonas, Pará, Roraima, Amapá, Acre e Rondônia";
            break;
        case "3":
            estado = "Ceará, Maranhão e Piauí";
            break;
        case "4":
            estado = "Paraíba, Pernambuco, Alagoas e Rio Grande do Norte";
            break;
        case "5":
            estado = "Bahia e Sergipe";
            break;
        case "6":
            estado = "Minas Gerais";
            break;
        case "7":
            estado = "Rio de Janeiro e Espírito Santo";
            break;
        case "8":
            estado = "São Paulo";
            break;
        case "9":
            estado = "Paraná e Santa Catarina";
            break;
        default:
            estado = "Estado desconhecido";
            break;
    }

    console.log("O estado do CPF é: " + estado);
}

validarCPF(cpf);
estadoCPF(cpf);