import { PrismaClient } from '@prisma/client'

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env

const prisma = new PrismaClient({
	datasources: {
		db: {
			url: `sqlserver://${DB_HOST}:${DB_PORT};database=${DB_NAME};user=${DB_USER};password=${DB_PASSWORD};encrypt=true`,
		},
	},
})

export default prisma
