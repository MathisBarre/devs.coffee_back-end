import express, { Response, Request, Router } from "express"
import discordServers from "../data/discordServers.json"
import events from "../data/events.json"
import initiatives from "../data/initiatives.json"
import ressources from "../data/ressources.json"

const router: Router = express.Router()

router.get('/', (req: Request, res: Response) => {
  res.json({
    message: "Le serveur marche parfaitement !"
  })
})

router.get('/discordServers', (req: Request, res: Response) => {
  res.json(discordServers)
})

router.get('/events', (req: Request, res: Response) => {
  res.json(events)
})

router.get('/initiatives', (req: Request, res: Response) => {
  res.json(initiatives)
})

router.get('/ressources', (req: Request, res: Response) => {
  res.json(ressources)
})


export default router