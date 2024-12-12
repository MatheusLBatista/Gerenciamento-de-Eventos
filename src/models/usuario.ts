import { Papel } from "../models/papeis";
import uuid from "uuid";

export interface Usuario {
    id: string,
    nome: string,
    email: string,
    senha: string,
    papel: Papel,
    dataCadastro: Date,
    dataUltimaAlteracao: Date,
    status: boolean
}

