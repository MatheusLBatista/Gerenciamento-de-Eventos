import dbPromise from "../index";

export async function criarLogs() {
    const db = await dbPromise;

    await db.exec(`
        CREATE TABLE IF NOT EXISTS logs (
            id TEXT PRIMARY KEY, 
            usuario_id INTEGER NOT NULL,
            tabela VARCHAR(15) NOT NULL,
            acao VARCHAR(15) NOT NULL,
            data_hora VARCHAR(30) NOT NULL,
            FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
        );
    `);
}

criarLogs();

