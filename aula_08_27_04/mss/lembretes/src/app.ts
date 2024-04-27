
import dotenv from 'dotenv'
import express from 'express'
import axios from 'axios'

dotenv.config()
const app = express()
app.use(express.json())




const{
    PORT 
} = process.env

/* base
    {
        "1": {
            "id": "1",
            "texto": "Fazer café"
        },
        "2": {
            "id": "2",
            "texto": "Nataçao"
        }
    }
*/

interface Lembrete {
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
        const{texto} = req.body
        const lembrete: Lembrete = {
            id: id,
            texto:texto
        }
        lembretes[id] = lembrete
        id = (+id+1).toString()
        res.json(lembrete)
    })

    app.post('/lembretes-update', (req, res) => {
        const{id, texto} = req.body
        lembretes[id].texto = texto
        res.json(lembretes[id])
        console.log(lembretes[id])
    })  


app.listen(PORT, () => console.log(`Lembretes. Porta ${PORT}.`))