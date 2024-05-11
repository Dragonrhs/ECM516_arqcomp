import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
app.use(express.json());

const { PORT } = process.env;


const funcoes: Record<string,Function> = {
    LembreteCriado: (lembrete: Lembrete) => {
        baseconsolidada[lembrete.id] = lembrete;
    },
    ObservacaoCriada: (observacao: Observacao) => {
        const observacoes = baseconsolidada[observacao.lembreteid]?.observacoes || [];
        observacoes.push(observacao);
        baseConsolidada[observacao.lembreteid]['observacoes'] = observacoes;
    }
}

interface Observacao{
    id: string;
    texto: string;
    lembreteid: string;
}

interface Lembrete{
    id: string;
    texto: string;
    observacoes?: Observacao[];
}


const baseconsolidada: Record<string, Lembrete> = {};

app.get('/lembrete', (req, res) => {
    res.status(200).json(baseconsolidada);
}

app.post('/eventos', (req, res) => {
    //violando o principio aberto/fechado 
    //if evento === 'LembreteCriado'
    //...
    //else if evento === ObservacaoCriada 

    const evento = req.body;
    console.log(evento);
    funcoes[evento.tipo](evento.payload);
}
catch (e) {

}

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
}