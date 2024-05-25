import dotenv from "dotenv";
dotenv.config();
import express from "express";
import axios from "axios";

const app = express();
app.use(express.json());

const palavraChave: string = "importante"
interface Observacao{

  id: string;
  texto: string;
  lembreteId: string;
  status: string;

}

const funcoes: Record<string,Function> ={
  ObvervacaoCriado: (observacao: Observacao) => {

    observacao.status = observacao.texto.includes(palavraChave) ? "importante" : "comum";
    axios.post("http://localhost:10000/eventos", {
      type: "ObservacaoClassificada",
      payload: observacao
    });
  }
}

const { PORT } = process.env;

app.post("/eventos", (req, res) => {
  try{
    funcoes[req.body.type](req.body.payload);
  }
  catch(e){
    res.end();
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});