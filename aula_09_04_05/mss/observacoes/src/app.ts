import express from 'express'
import axios from 'axios'
import dotenv from 'dotenv'
import { v4 as uuidv4 } from 'uuid'
const app = express()
app.use(express.json())

dotenv.config()
const {PORT} = process.env

interface Observacao {
  id: string
  texto: string
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

//POST /lembretes/1/observacoes cadastra uma observação
app.post('/lembretes/:id/observacoes', async (req, res) => {
  const idObs = uuidv4()
  const { texto } = req.body
  const observacoes: Observacao[] = base[req.params.id] || []
  const observacao: Observacao = {id: idObs, texto}
  observacoes.push(observacao)
  base[req.params.id] = observacoes
  res.status(201).send(observacao)
  console.log ({idObs, texto, lembreteId: req.params.id})
  axios.post('http://localhost:10000/eventos', {
    tipo: "ObservacaoCriada",
    payload: {
      id: idObs,
      texto,
      lembreteId: req.params.id
    }
  })
})

//GET /lembretes/1/observacoes obtem a lista de observacoes do lembrete 1
app.get('/lembretes/:id/observacoes', async (req, res) => {
  res.status(200).send(base[req.params.id] || [])
})

app.post('/eventos', async (req, res) => {
  console.log(req.body)
  res.status(200).send({msg: 'ok'})
})

app.listen(PORT, ()=> console.log(`Observacoes. Porta: ${PORT}`))