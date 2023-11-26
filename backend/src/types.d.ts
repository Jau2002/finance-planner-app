namespace NodeJS {
	interface ProcessEnv {
		PORT: string
		DB_USER: string
		DB_PASSWORD: string
		DB_HOST: string
		DB_PORT: number
		DB_NAME: string
		BASE_URL: string
	}
}

export interface User {
	id: number
	name: string
	email: string
	createDate: Date
}
