class NotFound extends Error {
	statusCode: number
	constructor(message: string, statusCode = 404) {
		super(message)
		this.statusCode = statusCode
	}
}

export default NotFound
