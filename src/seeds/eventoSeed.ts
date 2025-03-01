import { faker } from "@faker-js/faker";
import dbPromise from "../index";
import { v4 as uuid } from "uuid";

export async function seedEventos(quantidade: number = 10) {
    const db = await dbPromise;

    try {
        for (let i = 0; i < quantidade; i++) {
            const nome = faker.lorem.words(3); 
            const dataHora = faker.date.future().toISOString();
            const idUsuario = uuid(); 

            await db.run(
                "INSERT INTO evento (nome, dataHora, idUsuario) VALUES (?, ?, ?)",
                [nome, dataHora, idUsuario]
            );
        }
    } catch (error) {
        console.error("Erro ao inserir eventos:", error);
    }
}
