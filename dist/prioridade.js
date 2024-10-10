"use strict";
var Prioridade;
(function (Prioridade) {
    Prioridade["Baixa"] = "Essa tarefa pode ser feita depois.";
    Prioridade["Media"] = "Essa tarefa deve ser feita em breve.";
    Prioridade["Alta"] = "Essa tarefa \u00E9 urgente.";
})(Prioridade || (Prioridade = {}));
function verificarPrioridade(prioridade) {
    switch (prioridade) {
        case "Baixa":
            return Prioridade.Baixa;
        case "Media":
            return Prioridade.Media;
        case "Alta":
            return Prioridade.Alta;
        default:
            return undefined;
    }
}
console.log(`Prioridade: ${verificarPrioridade("Media")}`);
