import express, { Response, Request, Router } from "express"
import discordServers from "../data/discords.json"

const router: Router = express.Router()

router.get('/', (req: Request, res: Response) => {
  res.json(discordServers)
})

export default router