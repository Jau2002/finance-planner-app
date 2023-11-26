import { Usuarios } from '@prisma/client'
import prisma from '../middlewares/client'

interface User {
	nombre: string
	email: string
}

export async function postUser({ nombre, email }: User): Promise<Usuarios> {
	const createProduct: Usuarios = await prisma.usuarios.create({
		data: {
			nombre,
			email,
		},
	})
	return createProduct
}

export async function getUsers(): Promise<Usuarios[]> {
	const searchAllUsers: Usuarios[] = await prisma.usuarios.findMany({
		orderBy: { id: 'desc' },
	})
	return searchAllUsers
}
