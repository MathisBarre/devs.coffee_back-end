import express, { Response, Request, Router } from "express"
import ressources from "../data/ressources.json"

const router: Router = express.Router()

router.get('/', (req: Request, res: Response) => {
  res.json(ressources)
})

export default router