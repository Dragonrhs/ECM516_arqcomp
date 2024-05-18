import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import axios, { AxiosError } from 'axios'
import { v4 as uuidv4 } from 'uuid'
const app = express()
app.use(express.json())

const { PORT } = process.env

interface Observacao{
  id: string;
  texto: string;
  lembreteId: string;
  classificacao: string;
}

function classifica(observacao:Observacao) {
    if(observacao.texto.includes('importante')) {
        observacao.classificacao = 'importante'
    } else {
        observacao.classificacao = 'comum'
    }
}

const funcoes: Record < string, Function >= {
    ObservacaoCriada: (observacao: Observacao) => {
        classifica(observacao)
        axios.post('http://localhost:10000/eventos', {
            type: 'ObservacaoClassificada',
            payload: observacao
        })
    }
  }

app.post('/eventos', (req, res) => {
  try{
    console.log(req.body)
    const evento = req.body
    funcoes[evento.type](evento.payload)
  }
  catch(e){console.log(e)} //descarte de eventos que não são de interesse
  res.end()
})
//
app.listen(PORT, () => console.log(`Classificação. Porta: ${PORT}.`))