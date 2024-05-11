

// function waitForSeconds(seconds, message) {
//   //print 4 times the message

//   for (var i = 0; i < 4; i++) {
//     var start = new Date().getTime();
//     while (new Date().getTime() < start + seconds * 1000 / 4) {
//       //wait
//     }
//     console.log(message)
//   }
// }

// function operacao1(id) {
//   console.log("iniciou Operacao 1 id: " + id)
//   waitForSeconds(1, "Operacao 1 id: " + id + " esperando 1 segundo")
//   console.log("finalizou Operacao 1 id: " + id)
// }


// async function operacao2(id) {
//   console.log("iniciou Operacao 2 id: " + id)
//   waitForSeconds(1, "Operacao 2 id: " + id + " esperando 1 segundo")
//   console.log("finalizou Operacao 2 id: " + id)
// }

// operacao1(1)
// operacao1(2)
// operacao2(3)
// operacao2(4)



// function teste(){
//   return Promise.resolve('oi')
// }
// const res = await teste()
// async function outra(){
//   const res = await teste()
//   console.log(res)
// }

// outra()

// app.get('/users', async (req, res) => {
//   const users = await dao.get()
//   res.json(users)
//   console.log('oi')
// })
// const res = await teste()
// dao.get().then((res) => res.json(users))

// function oi(){
//   return Promise.resolve('oi')
// }

// async function oi2() {
//   return 'oi'
// }

// async function teste(){
//   const res = await oi()
//   console.log(res)
// }
// teste()



// // class Biscoito extends Promise{

// // }

// // function teste(){
// //   let biscoito = new Biscoito((resolve, reject) => {
// //     resolve("biscoito")
// //   });
// //   return biscoito
// // }
// // teste().then(res => console.log(res))




// // const fatorial = (n) => {
// //   //guard clause
// //   if (n < 0) return Promise.reject('Valor não pode ser negativo fat1')
// //   const d = new Date().getTime() + 1000
// //   while (new Date().getTime() <= d);
// //   let res = 1
// //   for(let i = 2; i <= n; i++) res *= i
// //   return Promise.resolve(res + " fat1")
// // } 


// // const fatorial2 = async (n) => {
// //   //guard clause
// //   if (n < 0) throw ('Valor não pode ser negativo fat2')
// //   // console.log("Antes")
// //   // const d = new Date().getTime() + 3000
// //   // while (new Date().getTime() <= d);
// //   // console.log("Depois")
// //   let res = 1
// //   for (let i = 2; i <= n; i++) res *= i
// //   return res + " fat2"
// // }

// // const chamadaComAsyncAwait = async() => {
// //   const res1 = await fatorial(5)
// //   console.log('res1: ' + res1)
// //   const res2 = await fatorial2(5)
// //   console.log('res2: ' + res2)
// //   try{
// //     const res3 = await fatorial(-5)
// //     console.log('res3: ' + res3)
// //   }
// //   catch(err){
// //     console.log('erro res3: ' + err)
// //   }
// //   try {
// //     const res4 = await fatorial(-5)
// //     console.log('res4: ' + res4)
// //   }
// //   catch (err) {
// //     console.log('erro res4: ' + err)
// //   }


// // }
// // chamadaComAsyncAwait()

// // // function chamadaComThenCatch(){

// // //   // const p = fatorial2(-15)
// // //   // p.then(res => console.log(res))
// // //   // p.catch(res => console.log(res))
  
// // //   fatorial2(-15).catch(err => console.log(err)).then(res => console.log(res))
// // //   fatorial2(15).catch(err => console.log(err)).then(res => console.log(res))
// // //   // fatorial(-15).then(res => { console.log("E agora aqui"); console.log(res) }).catch(err => { console.log("foi aqui"); console.log(err); return 1 })
// // //   // fatorial(15).then(res => {console.log(res); throw new Error("a")}).catch(err => console.log(err))
// // // }

// // // chamadaComThenCatch()

// // // async function hello(nome){
// // //   return "Oi, " + nome
// // // }
// // // const p = hello('Ana')
// // // console.log(p.then(res => console.log(res)))


// // // function hello(nome){
// // //   return Promise.resolve("Oi " + nome)
// // // }
// // // hello('Ana').then(res => console.log(res))

// // // function hello(nome){
// // //   const p = new Promise((resolve, reject) => {
// // //     resolve('Oi ' + nome)
// // //   })
// // //   return p
// // // }
// // // hello('Ana').then(res => console.log(res))
// // // function hello(nome){
// // //   return 'Oi, ' + nome
// // // }

// // // const res = hello('Ana')
// // // console.log(res)


// // // require('dotenv').config()
// // // const axios = require('axios')
// // // // const APP_ID = process.env.APP_ID
// // // // const Q = process.env.Q

// // // const { 
// // //   APP_ID, 
// // //   Q,
// // //   CNT,
// // //   UNITS,
// // //   LANG_WEATHER,
// // //   PROTOCOL,
// // //   BASE_URL 
// // // } = process.env

// // // class Teste{
// // //   oi(){
// // //     return this;
// // //   }

// // //   tchau(){
// // //     return this;
// // //   }
// // // }

// // // const t = new Teste()

// // // t.oi().tchau()

// // // const url = `${PROTOCOL}://${BASE_URL}?appid=${APP_ID}&q=${Q}&cnt=${CNT}&units=${UNITS}&lang=${LANG_WEATHER}`

// // // console.log(url)

// // // //isso resulta em promise
// // // axios.get(url)
// // // .then((res) => {
// // //   console.log(res.data)
// // //   console.log('****************************')
// // //   return res.data
// // // })
// // // .catch((err) => {
// // //   console.log("erro")
// // //   return {cnt: "aqui pode"}
// // // })
// // // .then((res) => {
// // //   console.log(`cnt: ${res.cnt}`)
// // //   console.log('****************************')
// // //   return res
// // // })
// // // .then(res => {return 1})
// // // .then((res) => {
// // //   for (let previsao of res.list){
// // //     //data: max: 23, min: 22
// // //     // console.log(previsao)
// // //     console.log(previsao)
// // //     console.log(`
// // //     ${new Date(previsao.dt * 1000).toTimeString()}:
// // //     max: ${previsao['main'].temp_max}\u00B0
// // //     min: ${previsao['main']['temp_min']}\u00B0
// // //     desc: ${previsao['weather'][0]['description']}
// // //     `)
// // //     console.log('-----------------------------------')
// // //   }  
// // //   return res
// // // })