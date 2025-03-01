import { z } from "zod";

export const UserSchema = z.object({
    nome: z.string()
        .min(4, { message: "O nome deve ter pelo menos 4 caracteres" })
        .max(100, { message: "O nome não pode ter mais de 100 caracteres" }),
    email: z.string()
        .email({ message: "E-mail inválido" }),
    senha: z.string()
        .min(8, { message: "A senha deve ter pelo menos 8 caracteres" })
        .regex(/[A-Z]/, { message: "A senha deve conter pelo menos uma letra maiúscula" })
        .regex(/[a-z]/, { message: "A senha deve conter pelo menos uma letra minúscula" })
        .regex(/[0-9]/, { message: "A senha deve conter pelo menos um número" })
        .regex(/[^A-Za-z0-9]/, { message: "A senha deve conter pelo menos um caractere especial" })
});
