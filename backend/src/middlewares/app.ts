import cors from 'cors'
import express, {
	type Application,
	type NextFunction,
	type Request,
	type Response,
} from 'express'
import morganBody from 'morgan-body'
import routerRoot from '../routes/root.routes'
import BadRequest from '../utils/badRequest'

const app: Application = express()

app.use(express.json({ strict: true }))

app.use(cors())

app.use((_: Request, res: Response, next: NextFunction): void => {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Credentials', 'true')
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	)
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
	next()
})

morganBody(app, {
	theme: 'inverted',
	logReqDateTime: false,
	logIP: false,
	logReqUserAgent: false,
	immediateReqLog: false,
})

app.use('/', routerRoot)

app.use(
	'*',
	(err: Error, req: Request, res: Response): Response =>
		BadRequest(res, 'Not exist this route')
)

export default app
