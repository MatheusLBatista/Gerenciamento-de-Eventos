"use strict";
function verificarAcesso(ehAdmin) {
    if (ehAdmin == true) {
        console.log("Acesso concedido. Bem-vindo ao sistema administrativo");
    }
    else {
        console.log("Acesso negado. Você não tem permissão para acessar o sistema!");
    }
}
verificarAcesso(false);
