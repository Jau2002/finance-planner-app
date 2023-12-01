import { type User } from '@prisma/client'
import prisma from '../middlewares/client'

async function getUsers(): Promise<User[]> {
	const searchAllUsers: User[] = await prisma.user.findMany({
		orderBy: { id: 'desc' },
	})
	return searchAllUsers
}

export default getUsers
