import * as dotenv from 'dotenv'
import app from './middlewares/app'
import prisma from './middlewares/client'

dotenv.config({ path: '.env' })

const main = async (): Promise<void> => {
	app.listen(3001, 'localhost', function (this: any): void {
		console.log(`http://localhost:${this.address().port}`)
	})
}

main()
	.then(async (): Promise<void> => {
		await prisma.$disconnect()
	})
	.catch(async (e: Error): Promise<void> => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
