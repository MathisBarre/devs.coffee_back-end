import express, { Response, Request, Router } from "express"
import { Document } from "mongoose"
import discordServers from "../data/discords.json"
import DiscordServer from "../models/discordServer.model"

const router: Router = express.Router()

router.get("/", (req: Request, res: Response) => {
  res.status(200).json(discordServers)
})

router.post("/", (req: Request, res: Response) => {
  const discordServer: Document = new DiscordServer(req.body)

  discordServer.save()
    .then(() => { res.status(201).json({ message: "New discord server successfully added", data: req.body })})
    .catch((error: Error) => { res.status(400).json(error) })
})

export default router