import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import axios from 'axios'
const app = express()
app.use(express.json())

const {
  PORT
} = process.env

/*
  {
    "1": {
      "id": "1",
      "texto": "Fazer café"
    },
    "2": {
      "id": "2",
      "texto": "Natação"
    }
  }
*/

interface Lembrete{
  id: string;
  texto: string;
}
let id: string = "1";
const lembretes: Record<string, Lembrete> = {
  
}

app.get('/lembretes', (req, res) => {
  res.json(lembretes)
})

app.post('/lembretes', (req, res) => {
  const { texto } = req.body
  console.log(texto)
  const lembrete: Lembrete = {
    id: id,
    texto: texto
  }
  lembretes[id] = lembrete
  id = (+id + 1).toString()
  //precisa emitir eventos usando axios
  res.json(lembrete)
  axios.post('http://localhost:10000/eventos', {
    tipo: "LembreteCriado",
    payload: lembrete
  })
})

app.post('/eventos', (req, res) => {
  console.log(req.body)
  res.status(200).send({msg: 'ok'})
})

app.listen(PORT, () => console.log(`Lembretes. Porta ${PORT}.`))