import { Papel } from "../models/papeis";
import { v4 as uuidv4 } from "uuid";
import { z } from 'zod';

export interface Usuario {
    id: string;
    nome: string;
    email: string;
    senha: string;
    papel: Papel;
    dataCadastro: Date;
    dataUltimaAlteracao: Date;
    status: boolean;
}

const UsuarioSchema = z.object ( {
    id: z.string().uuid(),
    nome: z.string().min(3, "A quantidade mínima de caracteres é 3").max(25, "A quantidade máxima de caracteres é 25"),
    email: z.string().email(),
    senha: z.string().min(8).includes("1", {message: "Deve ter sei la"}),
    papel: z.enum([Papel.Administrador, Papel.Convidado, Papel.Professor]),
    dataCadastro: z.date(),
    dataUltimaAlteracao: z.date(),
    status: z.boolean()
} )

type UsuarioSchema = z.infer<typeof UsuarioSchema>;

// Exemplo de um usuário
let user1: UsuarioSchema = {
    id: uuidv4(),
    nome: "Matheus Lucas Batista",
    email: 'matheusbatista@gmail.com',
    senha: '1234567a',
    papel: Papel.Convidado,
    dataCadastro: new Date('2023-01-01'),
    dataUltimaAlteracao: new Date('2024-12-01'),
    status: true
};

// Validando o objeto com o esquema
const resultadoUser1 = UsuarioSchema.safeParse(user1);

// Verificando se a validação foi bem-sucedida
if (resultadoUser1.success) {
  console.log("Usuário válido:", user1);
} else {
  // Se a validação falhar, exibe os erros
  resultadoUser1.error.errors.forEach(e => console.log(e.message));
}