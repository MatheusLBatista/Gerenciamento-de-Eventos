import { faker } from "@faker-js/faker";
import dbPromise from "../index";

export async function seedUsuarios(quantidade: number = 10) {
    const db = await dbPromise;

    try {
        for (let i = 0; i < quantidade; i++) {
            const nome = faker.person.fullName(); 
            const email = faker.internet.email(); 
            const senha = faker.internet.password(); 

            await db.run(
                "INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)",
                [nome, email, senha]
            );
        }

    } catch (error) {
        console.error("Erro ao inserir usuários:", error);
    }
}

seedUsuarios();