import {
	email,
	object,
	string,
	toTrimmed,
	transform,
	type Output,
} from 'valibot'

export const subscribeSchema = transform(
	object({
		name: string('Your name must be a string', [toTrimmed()]),
		email: string('Your email must be a string.', [
			toTrimmed(),
			email('The email address is badly formatted.'),
		]),
	}),
	(input) => ({ ...input }),
)

export type subscribeOutput = Output<typeof subscribeSchema>
