namespace NodeJS {
	interface ProcessEnv {
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
	nombre: string
	email: string
	createDate: Date
}
