import inquirer from "inquirer";
import dbPromise from "../index";
import { UserSchema } from "../validation/usuarioValidation";
import { ZodError } from "zod";
import { registrarLog } from "../logs/usuarioLog";

export async function menuUsuarios() {
  while (true) {
    const { opcao } = await inquirer.prompt([
      {
        type: "list",
        name: "opcao",
        message: "Gerenciamento de Usuários:",
        choices: [
          "1 - Cadastrar Usuário",
          "2 - Listar Usuários",
          "3 - Buscar Usuário por ID",
          "4 - Editar Usuário",
          "5 - Deletar Usuário",
          "6 - Voltar",
        ],
      },
    ]);

    switch (opcao.split(" - ")[0]) {
      case "1":
        await cadastrarUsuario();
        break;
      case "2":
        await listarUsuarios();
        break;
      case "3":
        await buscarUsuarioPorId();
        break;
      case "4":
        await editarUsuario();
        break;
      case "5":
        await deletarUsuario();
        break;
      case "6":
        return;
      default:
        console.log("Opção inválida!");
    }
  }
}

async function cadastrarUsuario() {
  try {
    const { nome, email, senha, idUsuario } = await inquirer.prompt([
      { type: "input", name: "nome", message: "Nome do usuário:" },
      { type: "input", name: "email", message: "E-mail do usuário:" },
      { type: "password", name: "senha", message: "Senha do usuário:" },
      { type: "input", name: "idUsuario", message: "ID do usuário responsável:"},
    ]);

    UserSchema.parse({ nome, email, senha });

    const db = await dbPromise;
    await db.run("INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)", [nome, email, senha]);

    await registrarLog("inserir", idUsuario); 
    console.log("Usuário cadastrado com sucesso!");

  } catch (error) {
    if (error instanceof ZodError) {
      console.error("Erro ao cadastrar usuário:");
      error.errors.forEach((err) => console.error(`- ${err.message}`));
    } else {
      console.error("Erro ao cadastrar usuário:", error);
    }
  }
}

async function listarUsuarios() {
  try {
    const db = await dbPromise;
    const usuarios = await db.all("SELECT * FROM usuario");

    console.log("\nLista de Usuários:");
    usuarios.forEach(user => console.log(`ID: ${user.idUsuario} | Nome: ${user.nome} | Email: ${user.email}`));

  } catch (error) {
    console.error("Erro ao listar usuários:", error);
  }
}

async function buscarUsuarioPorId() {
  try {
    const { id } = await inquirer.prompt([{ type: "number", name: "id", message: "ID do usuário:" }]);
    const db = await dbPromise;
    const usuario = await db.get("SELECT * FROM usuario WHERE idUsuario = ?", [id]);

    if (usuario) {
      console.log(`${usuario.nome} | ${usuario.email}`);
    } else {
      console.log("Usuário não encontrado.");
    }

  } catch (error) {
    console.error("Erro ao buscar usuário por ID:", error);
  }
}

async function editarUsuario() {
  try {
    const { id, idUsuario } = await inquirer.prompt([
      { type: "number", name: "id", message: "ID do usuário:" },
      { type: "input", name: "idUsuario", message: "ID do usuário responsável:"},
    ]);
    const db = await dbPromise;
    const usuario = await db.get("SELECT * FROM usuario WHERE idUsuario = ?", [id]);

    if (!usuario) {
      console.log("Usuário não encontrado.");
      return;
    }

    const { nome, email, senha } = await inquirer.prompt([
      { type: "input", name: "nome", message: "Novo nome:", default: usuario.nome },
      { type: "input", name: "email", message: "Novo e-mail:", default: usuario.email },
      { type: "password", name: "senha", message: "Nova senha:" },
    ]);

    await db.run("UPDATE usuario SET nome = ?, email = ?, senha = ? WHERE idUsuario = ?", [nome, email, senha, id]);

    await registrarLog("editar", idUsuario); 
    
    console.log("Usuário atualizado com sucesso!");
  } catch (error) {
    console.error("Erro ao editar usuário:", error);
  }
}

async function deletarUsuario() {
  try {
    const { id, idUsuario } = await inquirer.prompt([
      { type: "number", name: "id", message: "ID do usuário:" },
      { type: "input", name: "idUsuario", message: "ID do usuário responsável:"},  
    ]);
    const db = await dbPromise;
    const result = await db.run("DELETE FROM usuario WHERE idUsuario = ?", [id]);

    if (result.changes === 0) {
      console.log("Usuário não encontrado.");
      return;
    }

    await registrarLog("deletar", idUsuario);
    console.log("Usuário deletado com sucesso!");
  } catch (error) {
    console.error("Erro ao deletar usuário:", error);
  }
}