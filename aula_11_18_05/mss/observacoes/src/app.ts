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

const base: Record <string, Observacao[]> = {}
/*A base é uma lista
  Uma observação é assim:

  {
    "id": um valor uuid (use o pacote uuid para isso),
    "texto": comprar doce,
    "lembreteId": 1
  }
*/

/*
  {
    "1": [
      {id: 1, texto: oi}
    ]
  }
*/

const funcoes: Record < string, Function >= {
  ObservacaoClassificada: (observacao: Observacao) => {
    const observacoes: Observacao[] = base[observacao.lembreteId] || []
    let i = observacoes.findIndex((value: Observacao, index: number, obj: Observacao[]) => value.id === observacao.id)
    console.log("aaaa" + i)
    observacoes[i].classificacao = observacao.classificacao
    base[observacao.lembreteId] = observacoes
    axios.post('http://localhost:10000/eventos', {
      type: 'ObservacaoAtualizada',
      payload: observacao 
    })
  }
}

//POST /lembretes/1/observacoes cadastra uma observação
app.post('/lembretes/:id/observacoes', (req, res) => {
  const idObs = uuidv4()
  const { texto } = req.body
  const observacoes: Observacao[] = base[req.params.id] || []
  const observacao: Observacao = {id: idObs, texto, lembreteId: req.params.id, classificacao:'Aguardando'}
  observacoes.push(observacao)
  base[req.params.id] = observacoes
  axios.post('http://localhost:10000/eventos', {
    type: 'ObservacaoCriada',
    payload: observacao
  })
  res.status(201).json(observacao)
})
//GET /lembretes/1/observacoes obtem a lista de observacoes do lembrete 1
app.get('/lembretes/:id/observacoes', (req, res) => {
  res.status(200).json(base[req.params.id] || [])
})

app.post('/eventos', (req, res) => {
  try{
    console.log(req.body)
    const evento = req.body
    funcoes[evento.type](evento.payload)
    }

  catch(e){} //descarte de eventos que não são de interesse
  res.end()
})

class Seila extends Error{}
app.listen(PORT, () => console.log(`Observacoes. Porta: ${PORT}.`))