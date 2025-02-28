import { z } from "zod";

export const UserSchema = z.object ({
    nome: z.string().min(4, "Informe mais caracteres"),
    email: z.string().email(),
    senha: z.string()
    .min(8)
    .regex(/[A-Z]/, 'Senha deve ter ao menos uma letra maiúscula')
    .regex(/[a-z]/, 'Senha deve ter ao menos uma letra minúscula')
    .regex(/[0-9]/, 'Senha deve ter ao menos um número')
    .regex(/[^A-Za-z0-9]/, 'Senha deve ter ao menos um caractere especial')
})

