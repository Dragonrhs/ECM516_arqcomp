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

import {v4 as uuidv4} from 'uuid';

import dotenv from 'dotenv'
import express from 'express'
import axios from 'axios'

dotenv.config()
const app = express()
app.use(express.json())




const{
    PORT 
} = process.env

interface Observacao {
    id: string;
    texto: string;
    lembreteId: string;
}

let id = uuidv4();
const observacoes: Record<string, Observacao> = {

}

app.get('/observacoes', (req, res) => {
    res.json(observacoes)
})

app.post('/observacoes', (req, res) => {
    const{texto} = req.body
    const observacao: Observacao = {
        id: id,
        texto:texto,
        lembreteId: "1"
    }
})


app.put('/observacoes', (req, res) => {
    const{id, texto} = req.body
    observacoes[id].texto = texto
    res.json(observacoes[id])
    console.log(observacoes[id])

})

app.delete('/observacoes', (req, res) => {
    const{id} = req.body
    delete observacoes[id]
    res.json(observacoes)
})


app.listen(PORT, () => console.log(`Lembretes. Porta ${PORT}.`))