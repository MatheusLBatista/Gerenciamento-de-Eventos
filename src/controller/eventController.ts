import inquirer from "inquirer";
import dbPromise from "..";
import { EventSchema } from "../validation/eventoValidation";
import { ZodError } from "zod";
import { registrarLog } from "../logs/eventoLog";

export async function menuEventos() {
  while (true) {
    try {
      const { opcao } = await inquirer.prompt([
        {
          type: "list",
          name: "opcao",
          message: "Gerenciamento de Eventos:",
          choices: [
            "1 - Cadastrar Evento",
            "2 - Listar Eventos",
            "3 - Buscar Evento por ID",
            "4 - Editar Evento",
            "5 - Deletar Evento",
            "6 - Voltar",
          ],
        },
      ]);

      switch (opcao.split(" - ")[0]) {
        case "1":
          await cadastrarEvento();
          break;
        case "2":
          await listarEvento();
          break;
        case "3":
          await buscarEventoPorId();
          break;
        case "4":
          await editarEvento();
          break;
        case "5":
          await deletarEvento();
          break;
        case "6":
          return;
        default:
          console.log("Opção inválida! Tente novamente");
      }
    } catch (error) {
      console.error("Erro no menu de eventos:", error);
    }
  }

  async function cadastrarEvento() {
    try {
      const { nome, dataHora, idUsuario } = await inquirer.prompt([
        { type: "input", name: "nome", message: "Nome do evento:" },
        { type: "input", name: "dataHora", message: "Data e Hora do evento (DD/MM/YYYY HH:MM):" },
        { type: "number", name: "idUsuario", message: "ID do Usuário pelo cadastro:" },
      ]);

      EventSchema.parse({ nome, dataHora, idUsuario });

      const db = await dbPromise;
      await db.run("INSERT INTO evento (nome, dataHora, idUsuario) VALUES (?, ?, ?)", [
        nome,
        dataHora,
        idUsuario,
      ]);

      await registrarLog("inserir", "evento", idUsuario);
      console.log("Evento cadastrado com sucesso!");
      
    } catch (error) {
      if (error instanceof ZodError) {
        console.error("Erro ao cadastrar evento:");
        error.errors.forEach((err) => console.error(`- ${err.message}`));
      } else {
        console.error("Erro ao cadastrar evento:", error);
      }
    }
  }

  async function listarEvento() {
    try {
      const db = await dbPromise;
      const eventos = await db.all("SELECT * FROM evento");
      const { idUsuario } = await inquirer.prompt([
        { type: "number", name: "idUsuario", message: "ID do Usuário responsável pela busca:" },
      ]);

      console.log("\nLista de Eventos:");
      eventos.forEach((evento) =>
        console.log(`ID: ${evento.idEvento} | Nome: ${evento.nome} | Data: ${evento.dataHora}`)
      );

      await registrarLog("listar", "evento", idUsuario);

    } catch (error) {
      console.error("Erro ao listar eventos:", error);
    }
  }

  async function buscarEventoPorId() {
    try {
      const { id } = await inquirer.prompt([
        { type: "number", name: "id", message: "ID do evento:" },
      ]);
      const { idUsuario } = await inquirer.prompt([
        { type: "number", name: "idUsuario", message: "ID do Usuário responsável pela busca:" },
      ]);

      const db = await dbPromise;
      const evento = await db.get("SELECT * FROM evento WHERE idEvento = ?", [id]);

      if (evento) {
        console.log(`${evento.nome} | ${evento.dataHora}`);
      } else {
        console.log("Evento não encontrado.");
      }

      await registrarLog("buscar por ID", "evento", idUsuario);
    } catch (error) {
      console.error("Erro ao buscar evento por ID:", error);
    }
  }

  async function editarEvento() {
    try {
      const { id } = await inquirer.prompt([
        { type: "number", name: "id", message: "ID do evento:" },
      ]);

      const db = await dbPromise;
      const evento = await db.get("SELECT * FROM evento WHERE idEvento = ?", [id]);

      if (!evento) {
        console.log("Evento não encontrado.");
        return;
      }

      const { nome, dataHora, idUsuario } = await inquirer.prompt([
        { type: "input", name: "nome", message: "Novo nome:", default: evento.nome },
        { type: "input", name: "dataHora", message: "Nova data:", default: evento.dataHora },
        { type: "input", name: "idUsuario", message: "ID do usuário responsável pela edição:", default: evento.idUsuario },
      ]);

      await db.run("UPDATE evento SET nome = ?, dataHora = ? WHERE idEvento = ?", [
        nome,
        dataHora,
        id,
      ]);

      await registrarLog("editar", "evento", idUsuario);
      console.log("Evento atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao editar evento:", error);
    }
  }

  async function deletarEvento() {
    try {
      const { id, idUsuario } = await inquirer.prompt([
        { type: "number", name: "id", message: "ID do evento:" },
        { type: "input", name: "idUsuario", message: "ID do usuário responsável pela exclusão:"},
      ]);

      const db = await dbPromise;
      const result = await db.run("DELETE FROM evento WHERE idEvento = ?", [id]);

      if (result.changes === 0) {
        console.log("Evento não encontrado.");
        return;
      }

      await registrarLog("deletar", "evento", idUsuario);
      console.log("Evento deletado com sucesso!");
    } catch (error) {
      console.error("Erro ao deletar evento:", error);
    }
  }
}