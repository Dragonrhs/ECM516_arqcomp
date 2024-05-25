import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import axios from 'axios'
const app = express()
app.use(express.json())

const { PORT } = process.env
app.post('/eventos', function(req, res){
  const evento = req.body
  console.log(evento)
  axios.post('http://localhost:4000/eventos', evento)
  axios.post('http://localhost:5000/eventos', evento)
  axios.post('http://localhost:6000/eventos', evento)
  axios.post('http://localhost:7000/eventos', evento)
  res.end()
})

app.listen(PORT, () => console.log(`Barramento. Porta: ${PORT}.`))