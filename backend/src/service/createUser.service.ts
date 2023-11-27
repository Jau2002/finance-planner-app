import { User } from '@prisma/client'
import prisma from '../middlewares/client'

export async function postUser(name: string, email: string): Promise<User> {
	const createUser: User = await prisma.user.create({
		data: {
			email: email,
			name: name,
		},
	})
	return createUser
}

export async function getUsers(): Promise<User[]> {
	const searchAllUsers: User[] = await prisma.user.findMany({
		orderBy: { id: 'desc' },
	})
	return searchAllUsers
}
