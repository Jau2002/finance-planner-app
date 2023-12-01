import type { Request as ExpressRequest } from 'express'

interface RequestWithValidationData extends ExpressRequest {
	validatedBodyData?: any
	validatedParams?: any
	validatedQuery?: any
}

interface RequestSchemas {
	bodySchema?: object
	[key: string]: any
}
