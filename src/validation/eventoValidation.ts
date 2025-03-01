import { z } from "zod";

export const EventSchema = z.object({
    nome: z.string()
      .min(1, { message: "O nome do evento não pode estar vazio" })
      .max(100, { message: "O nome do evento não pode ter mais de 100 caracteres" }),
    dataHora: z.string().refine((value) => {
      const regex = /^\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}$/;
      return regex.test(value);
    }, { message: "A data e hora devem estar no formato DD/MM/YYYY HH:MM" }),
    idUsuario: z.number()
  });