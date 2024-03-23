
const executa = (f) =>{f()};   //funçao call back


const fs = require('fs');

const abrirArquivo = (nomeArquivo) => {

    //const a = () =>{}; //primeira classe é qunaod vc pode tratar uma funçao como um valor manipulavel

    const exibirConteudo = function(erro, conteudo){
    
        if(erro)
            console.log(`Deu Erro: ${erro}`);
        else
            console.log(conteudo.toString());
        
    
    }
    fs.readFile(nomeArquivo, exibirConteudo); 

}
abriraqrquivo("arquivo.txt");  //sequencia de execuçao de codigo 7 vai para 23 codigo raduken