const express = require('express')
const app = express()
app.use(express.json())
app.use((req, res, next) => {
  console.log("sim, passou por aqui")
  next()
})

app.use((req, res, next) => {
  console.log(req.header('user-agent'))
  next()
})

let id = 3
const alunos = [
  {
    id: 1,
    nome: 'João',
    fone: '11223344',
    email: 'joao@email.com'
  },
  {
    id: 2,
    nome: 'Maria',
    fone: '77884477',
    email: 'maria@email.com'
  }
]

//POST /alunos
app.post('/alunos', function(req, res){
  // const nome = req.body.nome
  // const fone = req.body.fone
  const { nome, fone, email } = req.body
  const aluno = {
    id: id++,
    nome,
    fone,
    email
  }
  alunos.push(aluno)
  res.status(201).json(aluno)
})

//GET /alunos
app.get("/alunos", (req, res) => {
  Promise.resolve(alunos).then(alunos => 
    res.status(200).json(alunos)
  )
})

//PUT /alunos/1
//no corpo da requisição, incluir o codigo q vc fez
app.put('/alunos/:id', (req, res) => {
  const id = req.params.id;
  const userIndex = alunos.findIndex((user) => user.id === Number(id));
  if (userIndex === -1) {
    return res.status(404).send('User not found')
  };
  const requestBody = req.body;
  alunos[userIndex] = {
    ...alunos[userIndex],
    ...requestBody
  };
  res.status(200).json({
    alunos: alunos[userIndex],
    message: 'The user was updated'
  })
})

//DELETE /alunos/1 

//endpoint: método do protocolo HTTP, recurso, funcionalidade
//API: é uma coleção de endpoints
app.get('/hello-express', (req, res) => {
  console.log(req.body)
  console.log("Sim, funcionou")
  res.send('Hello from Express')  
})

app.listen(3000, () => console.log('Começou...'))