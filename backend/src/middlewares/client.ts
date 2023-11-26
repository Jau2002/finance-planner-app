import { PrismaClient } from '@prisma/client'

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env

const prisma = new PrismaClient({
	datasources: {
		db: {
			url: `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?sslmode=require`,
		},
	},
})

export default prisma
