import { Anime } from "../models/Anime.js"
import { Stream } from "../models/Stream.js"

export async function streamIndex(req, res) {
  try {
    const streans = await Stream.findAll()
    res.status(200).json(streans)    
  } catch (error) {
    res.status(400).send(error)
  }
}

export async function streamCreate(req, res) {
  const { nome } = req.body

  if (!nome) {
    res.status(400).json("Erro... Informe todos os atributos")
    return
  }

  try {
    const stream = await Stream.create({
      nome
    })
    res.status(201).json(stream)    
  } catch (error) {
    res.status(400).send(error)
  }
}