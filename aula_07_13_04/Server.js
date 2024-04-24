const express = require('express')
const app = express()
app.use(express.json())


app.use((req, res, next)=> {
    console.log('Sim passou por aqui')
    next()
})


app.use((req, res, next)=> {
    console.log(req.headers['user-agent'])
    next()
})


let id = 3
const alunos = [
    {
        1: {
            id: 1,
            nome: 'João',
            fone: '123456789',
            email:'joao@email.com'
        }
    },
    {
        2: {
            id: 2,
            nome: 'Maria',
            fone: 987654321,
            email: 'maria@email.com'
        }
    }
]


// POST /alunos
app.post('/alunos', function (req, res){
    //const nome = req.body.nome
    //const fone = req.body.fone
    const {nome, fone, email} = req.body
    const aluno = {
        id: id++,
        nome,
        fone,
        email: email
    }
    alunos.push(aluno)
    res.status(201).json(aluno)
})

// GET /alunos
app.get('/alunos', (req, res) => {
    Promise.resolve(alunos).then((alunos) =>
        res.status(200).json(alunos)
    )
})

// PUT /alunos/1
app.put('/alunos/:id', (req, res) => {
    const {nome, fone, email} = req.body
    const aluno = {
        id: req.params.id,
        nome,
        fone,
        email: email
    }

    for (let i = 0; i < alunos.length; i++){
        if (alunos[i].id == req.params.id){
            alunos[i] = aluno
            res.status(201).json(aluno)
            return
        }
    }
    res.status(404).send('Aluno não encontrado')
})



// DELETE /alunos/1



// endpoint: método do protocolo http, recurso,  funcionalidade
// API: é uma coleção de endpoints

app.get('/hello-express', (req, res) => {
    console.log(req.body.teste)
    console.log("Sim, funcionou")
    res.send('Hello from Express')
})

app.listen(3000, ()=> console.log('Começou...'))