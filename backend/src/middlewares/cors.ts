import type { NextFunction, Request, Response } from 'express'

const ACCEPTED_ORIGINS: string[] = [
	'http://127.0.0.1:3000',
	'http://127.0.0.1:3001',
	'http://127.0.0.1:5000',
	'http://127.0.0.1:5500',
	'http://127.0.0.1:8000',
	'http://127.0.0.1:8080',
	'https://financeplanner.netlify.app',
]

const cors = (req: Request, res: Response, next: NextFunction): void => {
	const origin: any = req.header('Origin')

	if (!origin || ACCEPTED_ORIGINS.includes(origin)) {
		res.header('Access-Control-Allow-Origin', origin)
	}

	res.header('Access-Control-Allow-Credentials', 'true')
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept',
	)
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')

	next()
}

export default cors
