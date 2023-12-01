import { Router, type Request, type Response } from 'express'
import catcherAsync from '../middlewares/catcherAsync'
import type { RequestWithValidationData } from '../middlewares/requestValidation'
import validateData from '../middlewares/validateData'
import {
	subscribeSchema,
	type subscribeOutput,
} from '../schemas/subscribe.schema'
import getUsers from '../service/getUsers.service'
import postUser from '../service/userPosted.service'
import type { User } from '../types'

const whiteListController: Router = Router()

whiteListController.post(
	'/',
	validateData({ bodySchema: subscribeSchema }),
	catcherAsync(
		async (
			req: RequestWithValidationData,
			res: Response,
		): Promise<Response> => {
			const { name, email }: subscribeOutput = req.validatedBodyData

			const user: User = await postUser(name, email)

			return res.status(201).json({ data: user, message: 'User is created' })
		},
	),
)

whiteListController.get(
	'/',
	async (_: Request, res: Response): Promise<Response> => {
		const users: User[] = await getUsers()

		return res.status(200).json({ data: users, message: 'all user' })
	},
)

export default whiteListController
