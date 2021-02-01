import express, { Response, Request, Router } from "express"
import initiatives from "../data/initiatives.json"

const router: Router = express.Router()

router.get("/", (req: Request, res: Response) => {
  res.status(200).json(initiatives)
})

export default router