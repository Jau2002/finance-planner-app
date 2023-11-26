import { User } from '@prisma/client'
import prisma from '../middlewares/client'

interface UserType {
	name: string
	email: string
}

export async function postUser({ name, email }: UserType): Promise<User> {
	const createProduct: User = await prisma.user.create({
		data: {
			name,
			email,
		},
	})
	return createProduct
}

export async function getUsers(): Promise<User[]> {
	const searchAllUsers: User[] = await prisma.user.findMany({
		orderBy: { id: 'desc' },
	})
	return searchAllUsers
}
