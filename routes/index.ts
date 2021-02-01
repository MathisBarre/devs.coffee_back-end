import express, { Response, Request, Router } from "express"

const router: Router = express.Router()

router.get('/', (req: Request, res: Response) => {
  res.json({
    message: "The server is up and running!"
  })
})

export default router