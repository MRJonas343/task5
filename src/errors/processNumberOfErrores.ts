export function processNumberOfErrors(value: number): number {
	if (Number.isInteger(value)) return value

	const integerPart = Math.floor(value)
	const decimalPart = value - integerPart
	const random = Math.random()

	if (random <= decimalPart) return integerPart + 1

	return integerPart
}
