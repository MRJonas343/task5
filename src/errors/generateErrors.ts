const availableErrors = ["SWAP", "ADD", "DELETE"]
const availableFields = ["name", "address", "phone"]

export const generateErrors = (numberOfErrores: number) => {
	const errors = []

	for (let i = 0; i < numberOfErrores; i++) {
		const error = {
			error: availableErrors[Math.floor(Math.random() * 3)],
			field: availableFields[Math.floor(Math.random() * 3)],
		}
		errors.push(error)
	}

	return errors
}
