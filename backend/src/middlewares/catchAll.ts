import BadRequest from '../utils/BadRequest'

const catchAll = (): BadRequest => {
	throw new BadRequest('Don´t exist endpoint', 404)
}

export default catchAll
