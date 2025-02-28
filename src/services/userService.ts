import dbPromise from "../index";
//import { user } from "../models/usuarioModel";
//import { v4 as uuidv4 } from "uuid";
import { UserSchema } from "../validation/usuarioValidation";
import { ZodError } from "zod"; 
import inquirer from "inquirer";

import { registrarLog } from "../logs/usuarioLog";

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

    console.log("Tabela 'usuario' criada com sucesso!");
}

criarUsuario();
