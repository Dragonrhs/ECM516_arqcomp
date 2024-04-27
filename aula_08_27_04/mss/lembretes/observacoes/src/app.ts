/*
Uma observaçao é assim 
{
    "id": um valor uuid(use o pacote uuid para isso)
    "texto": "comprar doce",
    "lembreteId": "1"
}

*/ 

//POST /lembretes/observacoes cadastra uma observação

//GET /lembretes/observacoes obtem a lista de observações do lembrete 1

import { UUID } from "crypto";
import dotenv from 'dotenv'
import express from 'express'
import axios from 'axios'

dotenv.config()
const app = express()
app.use(express.json())




const{
    PORT 
} = process.env

interface Observacoes {
    id: string;
    texto: string;
    lembreteId: string;
}

let id = "1";
const observacoes: Record<string, Observacoes> = {

}



app.listen(PORT, () => console.log(`Lembretes. Porta ${PORT}.`))