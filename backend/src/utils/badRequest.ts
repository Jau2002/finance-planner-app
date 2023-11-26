import type { Response } from 'express'

const BadRequest = (res: Response, message: string): Response =>
	res.status(400).json({
		error: true,
		message,
	})

export default BadRequest
