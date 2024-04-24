//Vetores
// v1 =[]
// v1[0] = 3.4
// v1[10] = 2
// v1[2] = "abc"

// console.log(v1.length) // 11

// v2 = [2, "abc", true]
// console.log(v2)

// for(let i=0;i<v2.length;i++){
//     console.log(v2[i])
// }


///funçoes 

// function hello(){
//     console.log(`oi`)
// }

// hello()

// function hello(nome){

//     console.log(`Ola , $(nome)`)

// }
// hello('joao')

// function soma(a,b){
//     return a+b
// }

// const res = soma(2,3)
// console.log(res)

// no java 
//int soma(int a, int b){
// return a+b;
// }

// function soma(a,b){

//     if(a>0 && b>0){

//         return a+b
//         return undefined
// }
// }

// console.log(soma(2,3))
// console.log(soma(-2,1))
// console.log(soma())  //implicito undefined se tive parametro prevalece ele no lugar od undefined se nao prevalece a sobrescriçao



// const dobro = function(n){
//     return 2*n
// }
// console.log(dobro(7))

// const triplo = function(n=5){
//     return 3*n
// }

// console.log(triplo(6))
// console.log(triplo())
// console.log(triplo(undefined))
// console.log(triplo(y=6))
// console.log(y)


////arrow function 

// ( ) => { }

// a => { console.log(a)} //omissao de parenteses
// ()=> console.log(a) //omissao de chaves para quando tem uma instruçao somente

//(n) => 2*n

// const dobro = n => 2*n
// console.log(dobro(2))

//(n) => {return 2*n} //return nao é implicito volta undefined

// ()=> console.log('ola')()()

//closure uma ufnçao interna em conjunto com ao esxterni

// function  fabricadesaudaço (saudacao, nome){
//     function aux(){
        
//         let a;
//         function aux(){
//             consle .log (`%educaçao, nome`)
//         }
//         return aux
//     }
//     let f1 = fabricadesaudaço('oi', 'joao')
//     let f2 = fabricadesaudaço('tchau', 'joao')
//     f1()
//     f2()

//     function g(a,b){
//         console.log(a,b)
//     }
// }


//Get localhost:5000/pessoas
// app.get(`/pessoas`, (req, res) => {
//     res.send(`fweçaljfewa`)
// })

// app.use(CORS())


// let:umafuncao = function(){
//     console.log(`fui armazenada em uma variavel`)
// }
// umafuncao()


// function f(funcao){    ///funçao de alta ordem 
//     funcao()
// } 

// function g(){  //é de alta ordem 
//     function outrafuncao(){

//         console.log("fui criada por g")
//         return () => {console.log("pois é"); 
//         return() => console.log("vai longe")}

//     }
//     return outrafuncao()  //adicioanndo parenteses para chamar a outra  funçao interna e assim por diante ou no g()()()
// }

// const resultadoDaG = g()
// resultadoDaG() 
// console.log(resultadoDaG)
//g()() //chamada direta da funçao interna


////////////////////////////////////////////
// function g(){
//     function f(){
//         console.log("f")
//         return f
//     }
//     return f
// }

// g()()()()()()()()()

// function eagora(){
//     let cont = 1
//     function f1(){
//         console.log(cont)
//         cont++
//     }
//     cont++
//     function f2(){
//         console.log(cont)
//     }
//     cont++
//     return {f1, f2, cont} ///se o nome for igual a do objeto vc pode deixar somente f1, f2 em vez de f1:f1, f2:f2
// }

// const resultado = egaora()
// resultado.f1()  //close é contruido com o ultimo valor 
// resultado.f2()
// console.log(resultado.cont)  //retorna o valor do contador  