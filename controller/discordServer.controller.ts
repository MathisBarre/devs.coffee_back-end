import { Response, Request } from 'express'
import DiscordServer, { IdiscordServer } from '../models/discordServer.model'

export function getAllDiscordServers(req: Request, res: Response): void {
  DiscordServer.find()
    .then((discordServers: IdiscordServer[]) => {
      res.status(200).json(discordServers)
    })
    .catch((error: Error) => {
      res.status(400).json(error)
    })
}

export function addOneDiscordServer(req: Request, res: Response): void {
  DiscordServer.create(req.body)
    .then(() => {
      res.status(201).json({
        message: 'New discord server successfully added',
        data: req.body
      })
    })
    .catch((error: Error) => {
      res.status(400).json(error)
    })
}

export function getOneDiscordServer(req: Request, res: Response): void {
  DiscordServer.findById(req.params.id)
    .then((discordServer: IdiscordServer) => {
      res.status(200).json(discordServer)
    })
    .catch((error: Error) => {
      res.status(400).json(error)
    })
}

export function updateOneDiscordServer(req: Request, res: Response): void {
  DiscordServer.updateOne({ _id: req.params.id }, { _id: req.params.id, ...req.body })
    .then(() => {
      res.status(200).json({
        message: 'Discord server successfully updated',
        data: req.body
      })
    })
    .catch((error: Error) => {
      res.status(400).json(error)
    })
}

export function deleteOneDiscordServer(req: Request, res: Response): void {
  DiscordServer.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({ message: 'Discord server successfully deleted' })
    })
    .catch((error: Error) => {
      res.status(400).json(error)
    })
}
