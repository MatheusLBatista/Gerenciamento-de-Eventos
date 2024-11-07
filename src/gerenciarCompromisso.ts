interface Compromisso {
    data: Date,
    titulo: string,
    descricao: string,
    status: Status
}

enum Status {
    pendente = "Pendente",
    concluido = "Concluído",
    cancelado = "Cancelado"
}

let compromissosArray: Compromisso[] = [];

let compromisso1: Compromisso = {
    data: new Date(),
    titulo: "Limpar casa",
    descricao: "Limpar toda área de lazer",
    status: Status.pendente
};

let compromisso2: Compromisso = {
    data: new Date(),
    titulo: "Limpar quarto",
    descricao: "Limpar toda área",
    status: Status.concluido
};

function inserirCompromisso(compromisso: Compromisso) {
    compromissosArray.push(compromisso);
    //console.log(compromissosArray);
}

inserirCompromisso(compromisso1);
inserirCompromisso(compromisso2);

function listarCompromissos() {
    //console.log(compromissosArray)
}

listarCompromissos();

function listarUnicoCompromisso(compromisso: Compromisso) {
    //console.log(compromisso)
}

listarUnicoCompromisso(compromisso2);

function alterarCompromisso(compromisso:Compromisso){
    compromisso = {
        data: new Date("2024-10-10"),
        titulo: "oi",
        descricao: "oi",
        status: Status.pendente
    }
}

alterarCompromisso(compromisso1);

function deletarCompromisso() {
    compromissosArray.pop();
}   

