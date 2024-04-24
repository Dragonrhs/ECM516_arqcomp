// ----------------------- teste de await fora de função (não funciona)
// function teste(){
//     return Promise.resolve('oi')
// }
// const res = await teste()
// async function outra(){
//     const res = await teste()
//     console.log(res)
// }
// outra()
// -----------------------

// ----------------------- algo q o prof fez para demonstrar usos do await (eu não prestei atenção)
// appendFile.get('/users', async (req,res)=>{
//     const users = await dao.get()
//     res.json(users)
//     console.log('oi')
// }
// -----------------------



// ----------------------- teste de Fatorial async await
// const fatorial = async (n) => {
//     if(n<0) return Promise.reject('Valor não pode ser negativo')
//     let res = 1

//     for(let i = 2; i <= n; i++)
//         res *= i
//     return Promise.resolve(res)
// }

// // function chamadaComThenCatch(){
// //     fatorial(5).then((res)=>{
// //         console.log(res)
// //     }).catch((err)=>{
// //         console.log(err)
// //     })

// //     fatorial(-5).then((res)=>{
// //         console.log(res)
// //     }).catch((err)=>{
// //         console.log(err)
// //     })
// // }
// // chamadaComThenCatch()

// const fatorial2 = async (n) => {
//     if(n<0) throw 'Valor não pode ser negativo fat2'
//     console.log('Antes')
//     const d = new Date().getTime()+3000
//     while (new Date().getTime() < d);
//     console.log('Depois')    
//     let res = 1

//     for(let i = 2; i <= n; i++)
//         res *= i
//     return res + " fat2"
// }

// const chamadaComAsyncAwait = async () => {
//     const res1 = await fatorial(5)
//     console.log('res1: '+res1)
//     const res2 = await fatorial2(5)
//     console.log('res2: '+res2)

//     try{
//         const res3 = await fatorial(-5)
//         console.log('res3: '+res3)
//     }
//     catch(err){
//         console.log(err)
//     }
//     try{
//         const res4 = await fatorial2(-5)
//         console.log('res4: '+res4)
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// chamadaComAsyncAwait()
// -----------------------

// ----------------------- teste de async await com setTimeout
// function oi(){
//     return Promise.resolve('Oi')
// }
// async function oi2(){
//     return 'Oi'
// }

// async function teste(){
//     const res = await oi()
//     console.log(res)
//     const res2 = await oi2()
//     console.log(res2)
// }

// async function hello(nome){
//     return "Oi, +"+nome
// }
// const p = hello('Ana')
// p.then(res=> console.log(res) )

// function hello(nome){
//     return Promise.resolve('Oi '+nome)
// }
// hello('Ana').then(res=> console.log(res) )

// function hello(nome){
//     const p = new Promise((resolve,reject)=>{
//         resolve('Oi '+nome)
//     })
//     return p
// }

// hello('Ana').then((res)=>{
//     console.log(res)
// })