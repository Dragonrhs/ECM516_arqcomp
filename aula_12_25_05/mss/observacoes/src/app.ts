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
  status: "importante";
}

const base: Record <string, Observacao[]> = {}


const funcoes: Record < string, Function >= {
  ObservacaoClassificada: (observacao: Observacao): void => {
    const obsParaAtualizar: Observacao | undefined = 
    base[observacao.lembreteId].find(obs => obs.id === observacao.id)
    obsParaAtualizar!.status = observacao.status
    axios.post('http://localhost:10000/eventos', {
      type: 'ObservacaoAtualizada',
      payload: obsParaAtualizar
      })
    
    }
  }


//POST /lembretes/1/observacoes cadastra uma observação
app.post('/lembretes/:id/observacoes', (req, res) => {
  const idObs = uuidv4()
  const { texto } = req.body
  const observacoes: Observacao[] = base[req.params.id] || []
  const observacao: Observacao = {id: idObs, texto, lembreteId: req.params.id, status:'importante'}
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