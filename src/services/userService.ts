import dbPromise from "../index";

export async function criarUsuario() {
    const db = await dbPromise;

    await db.exec(
        `CREATE TABLE IF NOT EXISTS usuario(
            idUsuario INTEGER PRIMARY KEY AUTOINCREMENT,
            nome VARCHAR(100) NOT NULL,
            email VARCHAR(150) NOT NULL,
            senha TEXT NOT NULL
        )`
    );
}

