import { z } from "zod";
import dbPromise from "../index";
import { v4 as uuid } from "uuid";

export interface usuarioLog {
    id: string;
    usuario_id: number;
    acao: string;
    data_hora: string;
}

export const usuarioLogSchema = z.object({
    id: z.string(),
    idUsuario: z.number(),
    acao: z.string(),
    data_hora: z.string()
});

export async function registrarLog(acao: string, idUsuario: number) {
    const db = await dbPromise;
    const dataHora = new Date().toISOString();
    let id = uuid();

    await db.run(
        `INSERT INTO logs (id, acao, tabela, usuario_id, data_hora) VALUES (?, ?, ?, ?, ?)`,
        [id, acao, 'usuário', idUsuario, dataHora]
    );

    console.log(`Log registrado: ${acao} na tabela 'usuário' pelo usuário ${idUsuario} na data: ${dataHora}`);
}

export async function listarLog() {
    const db = await dbPromise;
    const logs = await db.all("SELECT * FROM logs");
    console.log("Logs registrados:", logs);
}