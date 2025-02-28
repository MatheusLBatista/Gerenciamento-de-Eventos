import dbPromise from "../index";
import { EventSchema } from "../validation/eventoValidation";
import { registrarLog } from "../logs/eventoLog";

export async function criarEvento() {
    const db = await dbPromise;

    await db.exec(
        `CREATE TABLE IF NOT EXISTS evento(
            idEvento INTEGER PRIMARY KEY AUTOINCREMENT,
            nome VARCHAR (100) NOT NULL,
            idUsuario INTEGER NOT NULL,
            dataHora VARCHAR(30) NOT NULL,
            FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario)
        )`
    );
}
criarEvento();