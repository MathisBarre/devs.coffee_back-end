import express, { Response, Request, Router } from 'express'
import events from '../data/events.json'

const router: Router = express.Router()

router.get('/', (req: Request, res: Response) => {
  res.status(200).json(events)
})

export default router
