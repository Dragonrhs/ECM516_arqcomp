import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const app = express()
app.use(express.json())

const { 
  PORT 
} = process.env


const funcoes: Record < string, Function >= {
  LembreteCriado: (lembrete: Lembrete) => {
    baseConsolidada[lembrete.id] = lembrete
  },
  ObservacaoCriada: (observacao: Observacao) => {
    const observacoes = baseConsolidada[observacao.lembreteId]['observacoes'] || []
    observacoes.push(observacao)
    baseConsolidada[observacao.lembreteId]['observacoes'] = observacoes
  },
  ObservacaoAtualizada: (observacao: Observacao): void => {

    const observacoes = baseConsolidada[observacao.lembreteId]['observacoes'] 
    const indice: number = observacoes!.findIndex(o => o.id === observacao.id)   //! promete que n é undefineid
    observacoes![indice] = observacao
    
  }
}

interface Observacao{
  id: string;
  texto: string;
  lembreteId: string;
  classificacao: string;
}

interface Lembrete{
  id: string;
  texto: string;
  observacoes?: Observacao[]
}

const baseConsolidada: Record <string, Lembrete> = {}

app.get('/lembretes', function(req, res) {
  res.status(200).json(baseConsolidada)
})

app.post('/eventos', (req, res) => {
  try{
    const evento = req.body
    console.log(evento)
    funcoes[evento.type](evento.payload)
  } 
  catch(e){} //descarte de evento não interessante
  res.end()
  //principio aberto/fechado
  // if evento === LembreteCriado
  //   ...
  // else if evento === ObservacaoCriada

  // else if evento === ObservacaoAtualizada


})


app.listen(PORT, () => console.log(`Consulta. Porta ${PORT}`))