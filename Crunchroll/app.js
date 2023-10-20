import express from 'express'
import { sequelize } from './database/conecta.js'
import { Anime } from './models/Anime.js'
import routes from './routes.js'
import { Stream } from './models/Stream.js'

const app = express()
const port = 3000

app.use(express.json())
app.use(routes)

app.get('/', (req, res) => {
  res.send('Sistema de Cadastro de Animes')
})

async function conecta_db() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com Banco de Dados realizada com Sucesso');
    await Stream.sync()
    console.log("Tabela de Stream: Ok")
    await Anime.sync()
    console.log("Tabela de Animes: Ok")
  } catch (error) {
    console.error('Erro ao conectar o banco de dados:', error);
  }  
}
conecta_db()

app.listen(port, () => {
  console.log(`API de Animes Rodando na Porta: ${port}`)
})