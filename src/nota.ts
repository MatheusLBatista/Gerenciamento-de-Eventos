enum Nota {
    A,
    B,
    C,
    D,
    F
}

function verificarNota(nota: Nota) {
    if (nota === Nota.A){
        console.log("Excelente");
    }
    else if(nota === Nota.B){
        console.log("Bom");
    }
    else if(nota === Nota.C){
        console.log("Satisfatório");
    }
    else if(nota === Nota.D){
        console.log("Insatisfatório");
    }
    else{
        console.log("Reprovado");
    }
}
//switch da próxima

verificarNota(Nota.B);
