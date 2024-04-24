
// Uma pessoa se chama Maria, tem 21 anos e mora na rua B, número 14.
// Use um objeto aninhado

// let pessoa2 = {
//     nome: 'Maria',
//     idade: 21,
//     endereco: {
//         rua: 'Rua b',
//         numero: 14
//     }
// }

// Mostrar os dados de endereço mesclando [] e .
// console.log(pessoa2.endereco.rua);
// console.log(pessoa2['endereco']['numero']);

// let pessoa = {
//     nome: 'João',
//     "idade da pessoa": 17,
// }

// //. e[]
// console.log(pessoa.nome);
// // console.log(pessoa.idade da pessoa); // Erro
// console.log(pessoa["idade da pessoa"]);
// console.log(Object.keys(pessoa));

// let numeros = [1, 2, 3];
// let pessoas = [
//     {idade: 18, nome: "Ana"},
//     {idade: 19, nome: "João"}
// ]

// //Uma concessionária tem CNPJ e endereço (rua, número e bairro). Alguns carros em estoque  (quantidade arbitraria). Cada carro tem marca, modelo e ano de fabricação.

// let concessionaria = {
//     cnpj: '123456789',
//     endereco: {
//         rua: 'Rua a',
//         numero: 10,
//         bairro: 'Centro'
//     },
//     carros: [
//         {marca: 'byd', modelo: 'dolphin', ano: 2023},
//         {marca: 'citroen', modelo: 'c3', ano: 2017},
//         {marca: 'honda', modelo: 'civic', ano: 1998}
//     ]
// }

// Exibir o texto C3
// console.log(
//     "marca: " + concessionaria.carros[1].marca+
//     "modelo: " + concessionaria.carros[1].modelo+
//     "ano: " + concessionaria.carros[1].ano
//     );

// iterar sobre a coleção de carros exibindo somente a marca
// com segurança, ou seja, certifique-se de que o veículo da vez tem a chave marca antes de acessar

// for (let i = 0; i < concessionaria.carros.length; i++) {
//     if (concessionaria.carros[i].marca) {
//         console.log(concessionaria.carros[i].marca);
//     }
// }

//GSON

function demorada(){
    // demora 2 segundos
    const dataAtualMais2 = new Date().getTime() + 2000;
    while (new Date().getTime() <= dataAtualMais2); // NO-OP: no operation
        const d = 8 + 4;
    return d
}

// const a = 2 + 5
// const b = 5 + 9
// const d = demorada()

// const e = 2 + a + b
// console.log(e); // 23

// const a = m
setTimeout(function(){
    const d = demorada()
    console.log(d);
}, 500)

const e = 1 + 2
console.log (e); 