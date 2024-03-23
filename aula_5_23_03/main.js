
// const executa = (f) =>{f()};   //funçao call back

// const fs = require('fs');

// const abrirArquivo = (nomeArquivo) => {

//     //const a = () =>{}; //primeira classe é quando vc pode tratar uma funçao como um valor manipulavel

//     const exibirConteudo = function(erro, conteudo){
    
//         if(erro)
//             console.log(`Deu Erro: ${erro}`);
//         else{

//             console.log(conteudo.toString());
//             const dobro = Number(conteudo.toString()) * 2;
//             const finalizar = function(erro){
//                 console.log("Salvou o dobro com sucesso");

//             }

//             fs.writeFile('dobro.txt', dobro, finalizar)  
//              }

// }

// fs.readFile(nomeArquivo, exibirConteudo); 
// }
// abrirarquivo("arquivo.txt");  //sequencia de execuçao de codigo 7 vai para 23 codigo raduken


//////////////////////////////////////////////////////////////////////////////////////

// const calculadoDemorado =(n) =>{

//     let res = 0;
//     for(let i=1;i<= n; i++) res += i;     //vai ficar bloqueado pois é uma funçao sincrona
//        return res;
    
// }
// const resultado = calculadoDemorado(10);    
// console.log(resultado);

//resolvendo usando promise

// const calculadoDemorado = (n) =>{
//     let p = new Promise(function(resolve, reject){ //funçao demorada q um dia vai terminar seja com falha ou n 


//     let res = 0;
//     for(let i=1;i<= n; i++) res += i;     
//        resolve(res)

//     })
//        return p;
// }

// const promise = calculadoDemorado(10) //coloca a computaçao demorada para funcionar
// //then e catch
// promise.then((abc) => {console.log(abc)}) //quando a funçao demorada temrinar faça isso 

//////////

// function calculoRapido(n){
//     // return new Promise((resolve, reject)=>{
//     //                                          // ou faz return resolve(n*(n+1)/2) que é a mesma coisa q a linha 65 e 67
//     //     resolve(n/2*(n+1))
//         return Promise.resolve(n*(n+1)/2)
//     // })
// }

// calculoRapido(10).then((res) => console.log(res))

//mesma coisa que o de cima
// calculoRapido(10)
// .then((res) => console.log(res)) //se der certo vai cair aqui
// .catch((erro) => console.log(erro)) //se der erro vai cair aqui

//pode encadear e nao crescer com o raduken

// calculoRapido(10)
// .then((res) => {console.log(res))
// return Promise.resolve(res+1)

// .then((res) => {console.log(res))
// return Promise.resolve(res+2)


//Outra exemplo:

 //se n>1, produzir a conta conhecida
 // caso contrario, produzir "somente valores positivos"
 //usar promises
 //return new Promise((resolve, reject)=>{
 //resolver(n/2*(n+1))
 //}) 

// function calculoRapido(n){
//  return n>=1? Promise.resolve(n/2*(n+1)) : Promise.reject("Somente valores positivos")

// }
// calculoRapido(-1).then((res) => console.log(res)).catch((reject) => console.log(`Deu erro: ${reject}`)) 

//////////////////////////////////////////////////////////////////////////////////////////

