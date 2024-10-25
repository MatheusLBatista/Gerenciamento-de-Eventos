let cpf: string = "52149730200";

function validarCPF(cpf: string){

    let verificadorPrimeiro = [10, 9, 8, 7, 6, 5, 4, 3, 2];
    let cpfNumber = cpf.split('').map(Number).slice(0, 9);
    let somaPrimeiro: number = 0;

    for(let i = 0 ; i <= verificadorPrimeiro.length - 1 ; i ++){
        let multiplicaPrimeiro: number = cpfNumber[i] * verificadorPrimeiro [i];
        //somaPrimeiro = multiplicaPrimeiro + somaPrimeiro; 
        somaPrimeiro = (somaPrimeiro + multiplicaPrimeiro);   
    }

    somaPrimeiro = somaPrimeiro % 11;
    somaPrimeiro = 11 - somaPrimeiro;
    if(somaPrimeiro >= 10){
        somaPrimeiro = 0;
    }
    //console.log(somaPrimeiro) 

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
    if(somaSegundo >= 10){
        somaSegundo = 0;
    }
    
    cpfNumber.push(somaSegundo);
    console.log(cpfNumber)

    let primeiro = somaPrimeiro.toString();
    let segundo = somaSegundo.toString();

    if(primeiro == cpf[9] && segundo == cpf[10]){
        console.log("It is valid!");
    }
    else{
        console.log("It is not valid!")
    }
}

validarCPF(cpf);

//cpf.split('').map(Number);
//console.log(cpf[5]);

// let cpfVerificar = cpf.toString()
// console.log(cpfVerificar);

//posso apenas verificar se os digitos são iguais, sem precisar do push e dividir o array




// let cpfNumberVerificar = cpfNumber.toString();
    // cpfNumberVerificar.split('').reverse().join('');
    // console.log(cpfNumberVerificar)

    // if(cpfNumberVerificar == cpfVerificar){
    //     console.log("It is valid!");
    // }
    // else{
    //     console.log("It's not valid!")
    // }








    
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