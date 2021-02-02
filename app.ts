/* - express ------------------ */
import express, { Express } from 'express'

/* - middlewares -------------- */
import dotenv from 'dotenv'
import helmet from 'helmet'
import cors, { CorsOptions } from 'cors'

/* - database ----------------- */
import mongoose from 'mongoose'

/* - routes ------------------- */
import indexRouter from './routes/index.route'
import discordServersRouter from './routes/discordServers.route'
import eventsRouter from './routes/events.route'
import initiativesRouter from './routes/initiatives.route'
import ressourcesRouter from './routes/ressources.route'

const app: Express = express()

dotenv.config()

// - DATABASE
const dbProtocol: string = 'mongodb+srv:/'
const dbAccount: string = `/mathisbarre:${process.env.DB_PASSWORD ?? ''}`
const dbCluster: string = `@free-cluster.qwrbz.mongodb.net/${process.env.DB_NAME ?? ''}`
const dbParams: string = '?retryWrites=true&w=majority'
const dbUrl: string = dbProtocol + dbAccount + dbCluster + dbParams

mongoose
  .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connection to the mongodb database successfully completed!')
  })
  .catch(() => {
    console.log(dbUrl)
    throw new Error('The connection to the mongodb database has failed')
  })

// - MIDDLEWARE
const corsOptions: CorsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
}

app.use(cors(corsOptions)) // ! Insecure, do not use this in production
app.use(helmet())
app.use(express.json())

// - ROUTES
app.use('/', indexRouter)
app.use('/api/v1/events', eventsRouter)
app.use('/api/v1/discordServers', discordServersRouter)
app.use('/api/v1/initiatives', initiativesRouter)
app.use('/api/v1/ressources', ressourcesRouter)

// TODO:  Global error handling

export default app
