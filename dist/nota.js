"use strict";
var Nota;
(function (Nota) {
    Nota[Nota["A"] = 0] = "A";
    Nota[Nota["B"] = 1] = "B";
    Nota[Nota["C"] = 2] = "C";
    Nota[Nota["D"] = 3] = "D";
    Nota[Nota["F"] = 4] = "F";
})(Nota || (Nota = {}));
function verificarNota(nota) {
    if (nota === Nota.A) {
        console.log("Excelente");
    }
    else if (nota === Nota.B) {
        console.log("Bom");
    }
    else if (nota === Nota.C) {
        console.log("Satisfatório");
    }
    else if (nota === Nota.D) {
        console.log("Insatisfatório");
    }
    else {
        console.log("Reprovado");
    }
}
//switch da próxima
verificarNota(Nota.B);
