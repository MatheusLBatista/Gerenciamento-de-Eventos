import { z } from "zod";

export const EventSchema = z.object({
    id: z.number().optional(),
    nome: z.string(),
    dataHora: z.string(), 
    idUsuario: z.number() 
});