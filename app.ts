import express, { Express } from "express"
import indexRouter from "./routes/index"
import helmet from "helmet"
import cors, { CorsOptions } from "cors"

var app: Express = express()

const corsOptions: CorsOptions = {
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}

app.use(cors(corsOptions)) // ! Insecure, do not use this in production
app.use(helmet())
app.use(express.json())

app.use('/', indexRouter)

export default app