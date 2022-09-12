// initial config 
const express = require('express')
const mongoose = require('mongoose')
const app = express()

const Aluno = require('./models/Aluno')
const Turma = require('./models/Turma')
//read JSON
app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

// routes from API
const alunoRoutes = require('./routes/alunoRoutes')
app.use('/aluno', alunoRoutes)

const turmaRoutes = require('./routes/turmaRoutes')
app.use('/turma', turmaRoutes)


app.get('/', (req, res) => {
  res.json({ message: 'Esta funcionando o URL!' })
})
//conexao com a porta e mongodb
mongoose
  .connect('mongodb+srv://grupo5:grupo5@apigrupo5.lovbsnn.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
      console.log('Conectou ao banco de dados!')
      app.listen(3000)
    })
     .catch((err) => console.log(err))