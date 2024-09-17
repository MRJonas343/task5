export function processNumberOfErrors(value: number): number {
	if (Number.isInteger(value)) {
		const result = value / 100

		if (Number.isInteger(result)) return result

		const integerPart = Math.floor(result)
		const decimalPart = result - integerPart
		const random = Math.random()

		if (random <= decimalPart) return integerPart + 1

		return integerPart
	}

	const dividedValue = value / 100
	const integerPart = Math.floor(dividedValue)
	const decimalPart = dividedValue - integerPart
	const random = Math.random()

	if (random <= decimalPart) return integerPart + 1

	return integerPart
}
