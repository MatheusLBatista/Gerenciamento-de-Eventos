let cpf: string = "71633057291";
//cpf.split('').map(Number);
//console.log(cpf[5]);


function validarCPF(cpf: string){

    let digitoVerificador: Number = 0;
    let verificadorPrimeiro = [10, 9, 8, 7, 6, 5, 4, 3, 2];
    let cpfNumber = cpf.split('').map(Number).slice(0, 9);
    let somaPrimeiro = 0;

    for(let i = 0 ; i <= verificadorPrimeiro.length - 1 ; i ++){
        let multiplicaPrimeiro = cpfNumber[i] * verificadorPrimeiro [i];
        //somaPrimeiro = multiplicaPrimeiro + somaPrimeiro; 
        somaPrimeiro = somaPrimeiro + multiplicaPrimeiro;   
    }

    somaPrimeiro = somaPrimeiro % 11;
    somaPrimeiro = 11 - somaPrimeiro;
    console.log(somaPrimeiro) 

    cpfNumber.push(somaPrimeiro);
    console.log(cpfNumber)

    let verificadorSegundo = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
    let somaSegundo = 0;

    for(let i = 0; i < verificadorSegundo.length; i++){
        let multiplicaSegundo = cpfNumber[i] * verificadorSegundo[i];
        somaSegundo = somaSegundo + multiplicaSegundo;
    }

    somaSegundo = somaSegundo % 11;
    somaSegundo = 11 - somaSegundo;
    
    cpfNumber.push(somaSegundo);
    console.log(cpfNumber)

    /*if(somaPrimeiro == cpf[9] && somaSegundo == cpf[10]){

    }*/

}

validarCPF(cpf);

//posso apenas verificar se os digitos são iguais, sem precisar do push e dividir o array













    
/*
    for(let i = 0; i < cpf.length; i ++) {
        let cpfNumber = cpf.split('').map(Number);
        console.log(cpfNumber[0] + cpfNumber[2])


        cpfNumber[i] * i;
        console.log(cpfNumber)
        for (let j = 0; j >= cpfNumber.length-2 ; j++){
            cpfNumber = cpfNumber[j] * [i];
        }
    }*/ 