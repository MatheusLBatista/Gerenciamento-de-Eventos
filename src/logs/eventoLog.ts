import { z } from "zod";
import dbPromise from "../index";
import { v4 as uuid } from "uuid";

export interface EventoLog {
  id: string;
  usuario_id?: number;
  acao: string;
  data_hora: string;
}

export const eventoLogSchema = z.object({
    id: z.string().uuid(),
    usuario_id: z.number().optional(),
    acao: z.string(),
    data_hora: z.string()
  });
  

  export async function registrarLog(acao: string, tabela: string, idUsuario?: number) {
  const db = await dbPromise;
  const dataHora = new Date().toISOString();
  let id = uuid();

  await db.run(
    `INSERT INTO logs (id, acao, tabela, usuario_id, data_hora) VALUES (?, ?, ?, ?, ?)`,
    [id, acao, tabela, idUsuario, dataHora]
  );

  console.log(`Log registrado: ${acao} na tabela '${tabela}' pelo usuário ${idUsuario || "desconhecido"} na data: ${dataHora}`);
}


export async function listarEventoLog() {
  const db = await dbPromise;
  const logs = await db.all("SELECT * FROM logs WHERE tabela = 'evento'");
  console.log("Logs de eventos registrados:", logs);
}
