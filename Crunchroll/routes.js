import { Router } from "express"
import { animeIndex, animeCreate } from "./controllers/animeController.js"
import { streamCreate, streamIndex } from "./controllers/streamController.js"

const router = Router()

router.get("/animes", animeIndex)
      .post("/anime", animeCreate)

router.get("/streans", streamIndex)
      .post("/stream", streamCreate)

export default router