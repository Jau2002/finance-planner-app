import type { NextFunction, Request, Response } from 'express'

const catcherAsync =
	(fn: any) => (req: Request, res: Response, next: NextFunction) =>
		fn(req, res).catch((err: Error) => {
			next(err)
		})

export default catcherAsync
