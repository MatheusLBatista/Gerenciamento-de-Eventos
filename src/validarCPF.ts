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

validarCPF(cpf);