
/*- express ------------------*/
import express, { Express, Request, Response } from "express"

/*- middlewares --------------*/
import dotenv from "dotenv"
import helmet from "helmet"
import cors, { CorsOptions } from "cors"

/*- database -----------------*/
import mongoose from "mongoose"

/*- routes -------------------*/
import indexRouter from "./routes/index.route"
import discordServersRouter from "./routes/discordServers.route"
import eventsRouter from "./routes/events.route"
import initiativesRouter from "./routes/initiatives.route"
import ressourcesRouter from "./routes/ressources.route"

var app: Express = express()

dotenv.config()

//- DATABASE
mongoose.connect(
  `mongodb+srv://mathisbarre:${process.env.DB_PASSWORD}@free-cluster.qwrbz.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true },
)
  .then(() => { console.log("Connection to the mongodb database successfully completed!")})
  .catch(() => { console.error("The connection to the mongodb database has failed") })

//- MIDDLEWARE
const corsOptions: CorsOptions = {
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}

app.use(cors(corsOptions)) // ! Insecure, do not use this in production
app.use(helmet())
app.use(express.json())

//- ROUTES
app.use("/api/v1/", indexRouter)
app.use("/api/v1/events", eventsRouter)
app.use("/api/v1/discordServers", discordServersRouter)
app.use("/api/v1/initiatives", initiativesRouter)
app.use("/api/v1/ressources", ressourcesRouter)

// TODO:  Global error handling

export default app