import express from 'express'
import axios from 'axios'
import dotenv from 'dotenv'
const app = express()
app.use(express.json())

dotenv.config()
const {PORT} = process.env

interface Erro{
  port: number,
  evento: string,
  erro: any
}

let erros: Record <number, Erro[]> = {}

app.get('/eventos/perdidos/:port', (req, res) => {
  let port : number = +req.params.port
  let err = erros[port] || []
  res.json(err)
})

app.post('/eventos', async (req, res) => {
  const evento = req.body
  console.log(evento)
  try{
    axios.post('http://localhost:4000/eventos', evento)
    .then(res => console.log(res.data)).catch(err => {
      console.log(err);
      err = erros[4000] || []
      err.push({port: 4000, evento: evento, erro: err})
      erros[4000] = err
    })
  }catch(err){
    console.log(err)
  }
  try{
    axios.post('http://localhost:5000/eventos', evento)
    .then(res => console.log(res.data)).catch(err => {
      console.log(err);
      err = erros[5000] || []
      err.push({port: 5000, evento: evento, erro: err})
      erros[5000] = err
    })
  }catch(err){
    console.log(err)
  }
  try{
    axios.post('http://localhost:11000/eventos', evento)
    .then(res => console.log(res.data)).catch(err => {
      console.log(err); 
      err = erros[11000] || []
      err.push({port: 11000, evento: evento, erro: err})
      erros[11000] = err
    })
  }catch(err){
    console.log(err)
  }
  try{
    axios.post('http://localhost:6000/eventos', evento)
    .then(res => console.log(res.data)).catch(err => {
      console.log(err); 
      err = erros[11000] || []
      err.push({port: 11000, evento: evento, erro: err})
      erros[11000] = err
    })
  }catch(err){
    console.log(err)
  }
  res.end()
})

app.listen(PORT, ()=> console.log(`Barramentos. Porta: ${PORT}`))
