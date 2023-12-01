import { type User } from '@prisma/client'
import prisma from '../middlewares/client'

async function postUser(name: string, email: string): Promise<User> {
	const createUser: User = await prisma.user.create({
		data: {
			email,
			name,
		},
	})
	return createUser
}

export default postUser
