import express, { Response, Request, Router } from "express"
import { Document } from "mongoose"
import DiscordServer, { IdiscordServer } from "../models/discordServer.model"

const router: Router = express.Router()

router.get("/", (req: Request, res: Response) => {
  DiscordServer.find()
    .then((discordServers: Array<IdiscordServer>) => { res.status(200).json(discordServers) })
    .catch((error: Error) => { res.status(400).json(error) })
})

router.post("/", (req: Request, res: Response) => {
  const discordServer: Document = new DiscordServer(req.body)

  discordServer.save()
    .then(() => { res.status(201).json({ message: "New discord server successfully added", data: req.body })})
    .catch((error: Error) => { res.status(400).json(error) })
})

router.get("/:id", (req: Request, res: Response) => {
  DiscordServer.findById(req.params.id)
    .then((discordServer: IdiscordServer) => { res.status(200).json(discordServer) })
    .catch((error: Error) => { res.status(400).json(error) })
})

router.put("/:id", (req: Request, res: Response) => {
  DiscordServer.updateOne({ _id: req.params.id }, { _id: req.params.id, ...req.body })
    .then(() => { res.status(200).json({ message: "Discord server successfully updated", data: req.body })})
    .catch((error: Error) => { res.status(400).json(error) })
})

router.delete("/:id", (req: Request, res: Response) => {
  DiscordServer.deleteOne({ _id: req.params.id })
    .then(() => { res.status(200).json({ message: "Discord server successfully deleted" })})
    .catch((error: Error) => { res.status(400).json(error) })
})

export default router