import inquirer from "inquirer";
import { menuUsuarios } from "./controller/userController";
import { menuEventos } from "./controller/eventController";
import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";
import { listarLogs } from "./controller/logController";

const dbPromise = open({
    filename: "./data/database.sqlite",
    driver: sqlite3.Database
});

export default dbPromise;

const usuarioAdmin = { login: "admin", senha: "12345" };

async function menuPrincipal() {
    while (true) {
        const { opcao } = await inquirer.prompt([
            {
                type: "list",
                name: "opcao",
                message: "Escolha uma opção:",
                choices: [
                    "1 - Gerenciar Usuários",
                    "2 - Gerenciar Eventos",
                    "3 - Listar Logs",
                    "4 - Sair",
                ],
            },
        ]);

        switch (opcao.split(" - ")[0]) {
            case "1":
                await menuUsuarios();
                break;
            case "2":
                await menuEventos();
                break;
            case "3":
                await listarLogs();
                break;
            case "4":
                console.log("Saindo do menu...");
                process.exit();
            default:
                console.log("Opção inválida! Tente novamente.");
        }
    }
}

async function realizarLogin() {
    console.log("\nLogin no Sistema");
    const { login, senha } = await inquirer.prompt([
        { type: "input", name: "login", message: "Digite seu nome de login:" },
        { type: "password", name: "senha", message: "Digite sua senha:", mask: "*" },
    ]);

    if (login === usuarioAdmin.login && senha === usuarioAdmin.senha) {
        console.log("Login feito!");
        await menuPrincipal();
    } else {
        console.log("Login falhou! Tente novamente.");
        await realizarLogin();
    }
}

realizarLogin();
  

