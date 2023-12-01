import express, { type Application } from 'express'
import morganBody from 'morgan-body'
import rootRouter from '../routes/root.routes'
import catchAll from './catchAll'
import cors from './cors'
import errorsManager from './errorsManager'

const app: Application = express()

app.use(express.json({ strict: true }))

app.use(cors)

morganBody(app, {
	theme: 'inverted',
	logReqDateTime: false,
	logIP: false,
	logReqUserAgent: false,
	immediateReqLog: false,
})

app.use('/', rootRouter)

app.use('*', catchAll)

app.use(errorsManager)

export default app
