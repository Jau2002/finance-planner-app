import { Router, type Request, type Response } from 'express'
import { getUsers, postUser } from '../service/createUser.service'
import type { User } from '../types'
import NotFound from '../utils/NotFound'

const whiteListController: Router = Router()

whiteListController.post(
	'/',
	async (req: Request, res: Response): Promise<Response> => {
		const { name, email } = req.body
		if (!name || !email) {
			throw new NotFound('No jodas que MECO')
		}
		const user: User = await postUser({ name, email })

		return res.status(204).json({ data: user, message: 'User is created' })
	}
)

whiteListController.get(
	'/',
	async (_: Request, res: Response): Promise<Response> => {
		const user: User[] = await getUsers()

		return res.status(204).json({ data: user, message: 'all user' })
	}
)

export default whiteListController
