import { parse } from 'valibot'
import type { RequestSchemas } from '../middlewares/requestValidation'

const validateAndAssign = (
	schema: any,
	dataToValidate: object,
	propertyName: string,
	req: RequestSchemas,
): any => {
	if (schema) {
		const validatedData = parse(schema, dataToValidate)
		req[propertyName] = validatedData
	}
}

export default validateAndAssign
