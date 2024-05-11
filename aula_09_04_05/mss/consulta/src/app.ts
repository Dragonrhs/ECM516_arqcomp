import express from 'express'
import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
app.use(express.json())

const {PORT} = process.env

interface Lembrete{
    id: string;
    texto: string;
}

interface Observacao {
    id: string
    texto: string
}

const lembretes: Record<string, Lembrete> = {}
const observacoes: Record <string, Observacao[]> = {} 

app.get('/consulta/:id', async (req, res) => {
    const lembrete = lembretes[req.params.id] || {}
    const observacao = observacoes[req.params.id] || []
    console.log(observacao)
    res.json({lembrete, observacao})
})

let processarEvento = (evento: any) => {
    if (evento.tipo === 'LembreteCriado'){
        const {id, texto} = evento.payload
        lembretes[id] = {id, texto}
    }
    if (evento.tipo === 'ObservacaoCriada'){
        const {id, texto, lembreteId} = evento.payload
        console.log('ObservacaoCriada', evento.payload)
        const obs = observacoes[lembreteId] || []
        obs.push({id, texto})
        observacoes[lembreteId] = obs

    }
}

app.post('/eventos', async (req, res) => {
    const evento = req.body
    processarEvento(evento)
    res.status(200).send({msg: 'ok'})
})

app.listen(PORT, () => console.log(`Consulta. Porta ${PORT}.`))

axios.get(`http://localhost:10000/eventos/perdidos/${PORT}`).then(res => {
    for (let evento of res.data){
        console.log('Processando evento:', evento)
        processarEvento(evento)
        }
}).catch(err => console.log(err))