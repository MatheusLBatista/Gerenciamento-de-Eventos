let cpf: string = "71633057291";


function validarCPF(cpf: string){

    let digitoVerificador: Number = 0;
    let verificadorPrimeiro = [10, 9, 8, 7, 6, 5, 4, 3, 2];
    let cpfNumber = cpf.split('').map(Number)
    let somaPrimeiro = 0;

    for(let i = 0 ; i <= verificadorPrimeiro.length - 1 ; i ++){
        let multiplicaPrimeiro = cpfNumber[i] * verificadorPrimeiro [i];
        //somaPrimeiro = multiplicaPrimeiro + somaPrimeiro; 
        somaPrimeiro = somaPrimeiro + multiplicaPrimeiro;   
    }

    somaPrimeiro = somaPrimeiro % 11;
    somaPrimeiro = 11 - somaPrimeiro;
    console.log(somaPrimeiro) 
}

validarCPF(cpf);















    
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