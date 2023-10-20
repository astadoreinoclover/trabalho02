import { Anime } from "../models/Anime.js"
import { Stream } from "../models/Stream.js"

export async function animeIndex(req, res) {
  try {
    const animes = await Anime.findAll({
      include: Stream
    })
    res.status(200).json(animes)    
  } catch (error) {
    res.status(400).send(error)
  }
}

export async function animeCreate(req, res) {
  const { titulo, genero, episodeos, datalan, temporadas,url_image , stream_id } = req.body

  if (!titulo || !genero || !episodeos || !datalan || !temporadas || !url_image || !stream_id) {
    res.status(400).json("Erro... Informe todos os atributos")
    return
  }

  try {
    const anime = await Anime.create({
      titulo, genero, episodeos, datalan, temporadas, url_image, stream_id
    })
    res.status(201).json(anime)    
  } catch (error) {
    res.status(400).send(error)
  }
}