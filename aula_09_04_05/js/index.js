


// function calculoRapidinho(n){
//   //se n >= 1, produzir a continha conhecida
//   //caso contrario, produzir "somente valores positivos, por favor"
//   //claro, use promises
//   // return new Promise((resolve, reject) => {
//   //   resolve(n / 2 * (n + 1))
//   // })
//   // return Promise.resolve(n / 2 * (n + 1))
// }

// calculoRapidinho(10)
// .then(res =>{ 
//   console.log(res)
//   calculoRapidinho(11).then((res) => {
//     console.log(res)
//     calculoRapidinho(-1).then(() => {})
//   })
// })
// .catch(erro => console.log(`Deu erro: ${erro}`))

// calculoRapidinho(11)
// .then(res => {
//   console.log(res)
//   return Promise.resolve(res + 1)
// })
// .then(res => {
//   console.log(res)
//   return Promise.resolve(res + 2)
// })
// .then(res => {
//   console.log(res)
//   return Promise.resolve(res + 2)
// })



// //1 + 2 + 3 + ... + n - 1 + n
// const calculadoDemorado = (n) => {
//   let p = new Promise(function(resolve, reject){
//     let res = 0
//     for(let i = 1; i <= n; i++) res += i
//     resolve(res)
//   })
//   return p
// }

// const promise = calculadoDemorado(10)
// //then e catch
// promise.then((res) => {console.log(res)})

// const resultado = calculadoDemorado(10)
// console.log(resultado)


// const fs = require('fs')
// const abrirArquivo = (nomeArquivo) => {
//   const exibirConteudo = function(erro, conteudo){
//     if(erro)
//       console.log(`Deu Erro: ${erro}`)
//     else{
//       console.log(conteudo.toString())
//       const dobro = +conteudo.toString() * 2;
//       const finalizar = function(erro){
//         console.log("Salvou o dobro com sucesso")
//       }
//       fs.writeFile('dobro.txt', dobro.toString(), finalizar)
//     }
//   }
//   fs.readFile(nomeArquivo, exibirConteudo)
// }
// abrirArquivo("arquivo.txt")





// const executa = (f) =>{
//   f()
// }

// //evento acontece...

// onclick(executa(() => {}))

// function demorada(){
//   //demora 2 segundos
//   const dataAtualMais2 = new Date().getTime() + 2000
//   while(new Date().getTime() <= dataAtualMais2); //NO-OP: No operation
//   const d = 8 + 4
//   console.log("estou na demorada, qse acabando...")
//   return d  
// }
// setTimeout(() => {
//   console.log('primeira')
//   demorada()
//   setTimeout(() => console.log('segunda'), 1000)
// }, 0)
// console.log('script principal terminando...') 




// // const a = m
// setTimeout(function(){
//   console.log('oi')
//   const d = demorada()
//   console.log(d)
// }, 2000)

// const e = 1 + 2
// console.log(e)

// const a = 2 + 5
// const b = 5 + 9
// const d = demorada()

// const e = 2 + a + b
// console.log(e)

// const a = 2 + 7
// const b = 8 + 8 * 4
// console.log(a + b)

// console.log("Eu primeiro...")
// console.log("Agora eu...")
// console.log("Sempre vou ser a ultima...:(")


//processamento sincrono/assincrono
//processamento bloqueante/nao bloqueante
// não tem: new Thread().start() 
// httpClient.get((res) => console.log(res));
// console.log("oi")
// const resultado = fs.readSync('arquivo.txt')




// let numeros = [1, 2, 3]
// let pessoas = [{
//   idade: 18, nome: "Ana}, {idade: 19, nome: "Joao"}]

// //Uma concessionária tem CNPJ e endereço (rua, numero e bairro). Alguns carros em estoque (quantidade arbitraria). Cada carro tem marca, modelo e ano de fabricação.

// resposta do Enzo

// Sugar, yes, please
// Won't you come and put it down on me?
// I'm right here, 'cause I need

// const concessionaria = {
//     cnpj: "54.169.432/0001-50",
//     endereco:
//     {
//       rua: "Praça Mauá",
//       numero: 123,
//       bairro: "Mauá"
//     },
//     carros: [
//       {
//         marca: "byd",
//         modelo: "dolphin",
//         ano: "2023"
//       },
//       {
//         marca: "citroen",
//         modelo: "C3",
//         ano: "2017"
//       },
//       {
//         marca: "Honda",
//         modelo: "Civic",
//         ano: "1998"
//       }
//     ]
//   }

// //exibir o texto C3
// console.log(concessionaria.carros[1].modelo)

// //resposta do Rubio
// iterar sobre a coleção de carros, exibindo somente a marca de cada um
// //com segurança, ou seja, certifique-se de que o veiculo da vez tem a chave marca antes de acessar
// for(i = 0, i++, 

// for (let i = 0; i < concessionaria.carros.length; i++) {
//   // verificar se o carro possui modelo 
//   if (concessionaria.carros[i].modelo)

//     console.log(concessionaria.carros[i].modelo)
// }

// concessionaria.carros.forEach((x) => console.log(x?.modelo))

// concessionaria.carros.forEach((item) => {
//   item.marca ? console.log(item.marca) : null
// })

// const calculadora = {
//   somar: (a, b) => a + b,
//   subtrair: function (a, b) {
//     return a - b
//   }
// }

// const calculadora = {
//   somar: (a, b) => a + b,
//   subtrair: function (a, b) { return a - b },
//   dobrar: n => 2 * n
// }







// let calculadora = 
// console.log(calculadora.somar(2, 3)) //tem que ser arrow function sem {}
// console.log(calculadora.subtrair(3, 1))//tem que ser function regular



// //uma pessoa se chama Maria, tem 21 anos e mora na Rua b, numero 14
// //use um objeto aninhado
// let pessoa2 = {

// }
// //mostrar os dados de endereço mesclando [] e .



// //uma pessoa se chama João e tem 17 anos
// let pessoa = {
//   nome: "João",
//   "idade da pessoa": 17
// }

// //. e []
// console.log(pessoa.nome)
// // console.log(pessoa.idade da pessoa)
// console.log(pessoa['idade da pessoa'])
// console.log(Object.keys(pessoa))
// //GSON

// //JSON: Javascript Object Notation
// //objeto Javascript literal
// // let pessoa = {
// //   1: "Ana",
// //   'data': new Date(),
// //   somar: (a, b) => a + b,
// // }

// // console.log((pessoa[1]))



// // function eAgora(){
// //   let cont = 1
// //   function f1(){
// //     console.log(cont)
// //     cont++
// //   }
// //   cont++
// //   function f2(){
// //     console.log(cont)
// //   }
// //   cont++
// //   return {f1, f2, cont}
// // }

// // const resultado = eAgora()
// // resultado.f1()
// // resultado.f2()
// // resultado.f1()
// // resultado.f1()
// // console.log(resultado.cont)

// // function g(){
// //   // let a;
// //   // return f
// // }
// // function g(){
// //   function f(){
// //     return f
// //   }
// // }
// // f()()()

// // function f(funcao) {
// //   funcao()
// // }

// // function g(){
// //   function outraFuncao(){
// //     console.log("Fui criada por g")
// //     // return () => {console.log('pois é...'); return () => console.log('vai longe..')}
// //     return outraFuncao
// //   }
// //   return outraFuncao()
// // }
// // g()()

// // const f2 = (a) => {
// //   if (a > 1)
// //     return a + f2(a - 1)
// //   return 1
// // }
// // console.log(f2(10))
// // const resultadoDaG = g()
// // resultadoDaG()
// // console.log(resultadoDaG)


// // let umaFuncao = function(){
// //   console.log("Fui armazenada em uma variavel")
// // }
// // umaFuncao()

// //https://outro.com.br:5000


// // app.use(cors())

// //GET https://www.exemplo.com.br:5000/pessoas
// // app.get('/pessoas', (req, res) => {
// //   res.send('fweçaljfewa')
// // })

// // interface Runnable{public void run();}

// // class Teste implements Runnable{
// //   public void run(){
// //     System.out.println("Oi")
// //   }
// // }

// // new Thread(new Teste()).start();


// // Runnable r = () -> {System.out.println("Oi")}

// // new Thread(r).start();

// // class Teste{

// //   public void m(){
// //     final int a = 2;
// //     Runnable r = () -> System.out.println(a);

// //   }
// // }

// // function fabricaDeSaudacoes(saudacao, nome){
// //   function aux(){
// //     console.log(`${saudacao}, ${nome}`)
// //   }
// //   return aux
// // }

// // function executa(f){
// //   f()
// // }
// // executa(() => console.log('oifewafweaf'))

// // let f1 = fabricaDeSaudacoes('oi', 'João')
// // let f2 = fabricaDeSaudacoes ('Tchau', 'Joao')
// // f1()
// // f2()

// // function g(a, b){
// //   console.log(a, b)
// // }

// // (n) => 2 * n
// // const dobro = n => 2 * n
// // console.log(dobro(2))

// // const teste = () => console.log('oi')()
// // teste()

// // //arrow functions
// // // () => console.log('oi'); console.log('oi')
// // // a => {console.log(a)}
// // // () => {}
// // // const triplo = function(n = 5){
// // //   return n * 3
// // // }
// // // console.log(triplo(6))
// // // console.log(triplo())
// // // console.log(triplo(y = 6))
// // // console.log(y)
// // // const dobro = function (n){
// // //   return 2 * n
// // // }
// // // console.log(dobro(7))

// // public class Pessoa{
// //   public void andar(){
// //     var resultado = comer();
// //     var teste = comer;
// //   }

// //   public void comer(){
// //     MeuTeste t = () -> {System.out.println("Oi")}
// //   }
// // }

// // interface MeuTeste{
// //   public void meuMetodo();
// // }

// // // function soma(a = 5, b = 5){
// // //   // if (a > 0 && b > 0)
// // //   console.log(a, b)
// // //   return a + b
// // // }

// // // console.log(soma(2, 3))
// // // console.log(soma(-2, 1))
// // // console.log(soma(2, 4))

// // // function soma(a, b){
// // //   return a + b
// // // }
// // // const res = soma(2, 3)
// // // console.log(res)

// // // int soma(int a, int b){
// // //   return a + b;
// // // }

// // // function hello(){
// // //   console.log('oi')
// // // }

// // // hello()
// // // function hello(nome){
// // //   console.log(`Olá, ${nome}`)
// // // }
// // // hello('João')

// // // v2 = [2, "abc", true]
// // // console.log(v2)

// // // for (let i = 0; i < v2.length; i++)
// // //   console.log(v2[i])

// // // v1 = []
// // // v1[0] = 3.4
// // // v1[10] = 2
// // // v1[2] = "abc"
// // // console.log(v1.length)
// // // var v = new int[10];


// // // []
// // // if (null){console.log('oi')}
// // // console.log([] == [])
// // // console.log([] == false)
// // // console.log(null == undefined)
// // // console.log (null == null)
// // // console.log(1 == [-1])
// // // console.log(true == 1)
// // // console.log( null >= 0)
// // // let a = new Girafa();
// // // let b = new Macaco();

// // // let p1 = new Pessoa('V')
// // // let p2 = new Pessoa('V')

// // // if (p1 === p2)

// // // console.log('1' === '1')
// // // != !==
// // // console.log(1 === '1')
// // // console.log (1 === 1)
// // // console.log(1 == '1')
// // // console.log(1 == 1)

// // //coerção explícita
// // // const n1 = 2
// // // const n2 = '3'
// // // const n4 = n1 + Number(n2)
// // // console.log(n4)


// // //coerção implícita
// // // const n3 = n1 + n2
// // // console.log(n3)

// // //  idade = 18
// // // console.log(`Oi, ${nome}`)
// // // let nome = 'João' //içamento (hoist)
// // // if (idade >= 18){
// // //   console.log(`Parabéns, ${nome}. Você pode dirigir.`)
// // // }
// // // console.log(`Até logo, ${nome}`)


// // // var linguagem = "Javascript"
// // // console.log(`Aprendendo ${linguagem}`)
// // // var linguagem = "Java"
// // // console.log(`Aprendendo ${linguagem}`)

// // // var a = 2
// // // a = 3
// // //const, let e var
// // // const idade = 19
// // // console.log(idade)
// // // idade = 20
// // // idade.falar()
// // // const nome = "José"
// // // const sobrenome = 'Silva'
// // // const nomeFinal = `Mendes`
// // //não pode (reatribuição de constante)
// // //nome = "Ana"
// // // int a = 2;
// // // a = "Ana";
// // // a.falar();
// // // String b = "abc";
