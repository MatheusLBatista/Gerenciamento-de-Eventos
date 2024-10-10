enum Prioridade {
    Baixa = "Essa tarefa pode ser feita depois.",
    Media = "Essa tarefa deve ser feita em breve.",
    Alta = "Essa tarefa é urgente."
}

function verificarPrioridade(prioridade: string) {
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