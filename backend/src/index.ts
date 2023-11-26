import * as dotenv from 'dotenv'
import app from './middlewares/app'

dotenv.config({ path: '.env' })

const PORT: number = parseInt(process.env.PORT || '3001') ?? 3001

app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`)
})
