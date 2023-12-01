import type { NextFunction, Request, Response } from 'express'

const errorsManager = (
	err: any,
	req: Request,
	res: Response,
	_: NextFunction,
): Response =>
	res.status(err.statusCode).json({
		success: false,
		message: err.message,
		route: `Requested path ${req.path} not found`,
		stack: err.stack,
	})

export default errorsManager
