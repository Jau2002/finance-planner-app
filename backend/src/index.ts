import * as dotenv from 'dotenv'
import app from './middlewares/app'
import prisma from './middlewares/client'

dotenv.config({ path: '.env' })

const PORT: number = parseInt(process.env.PORT || '3001', 10) ?? 3001

const main = async (): Promise<void> => {
	try {
		await prisma.$connect()
		console.log('Connected to the database')

		app.listen(PORT, 'localhost', function (this: any): void {
			console.log(
				`Server is running at http://localhost:${this.address().port}`
			)
		})
	} catch (error) {
		console.error('Error connecting to the database:', error)
		process.exit(1)
	}
}
main()
