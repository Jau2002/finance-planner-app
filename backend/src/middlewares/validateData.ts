import type { NextFunction, Response } from 'express'
import BadRequest from '../utils/BadRequest'
import validateAndAssign from '../utils/validateAndAssign'
import type {
	RequestSchemas,
	RequestWithValidationData,
} from './requestValidation'

const validateData =
	({ bodySchema }: RequestSchemas) =>
	(req: RequestWithValidationData, _: Response, next: NextFunction): any => {
		try {
			validateAndAssign(bodySchema, req.body, 'validatedBodyData', req)

			next()
		} catch (err: any) {
			throw new BadRequest(err.message, 422)
		}
	}

export default validateData
