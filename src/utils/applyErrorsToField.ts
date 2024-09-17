import { alphabet } from "@/constants"
import { RegisterError } from "@/interfaces"

export const applyErrorToField = (
	fieldValue: string,
	error: RegisterError,
): string => {
	const fieldArray = fieldValue.split("")
	const randomIndex = Math.floor(Math.random() * fieldArray.length)

	switch (error.error) {
		case "SWAP": {
			if (randomIndex < fieldArray.length - 1) {
				;[fieldArray[randomIndex], fieldArray[randomIndex + 1]] = [
					fieldArray[randomIndex + 1],
					fieldArray[randomIndex],
				]
			}
			break
		}
		case "ADD": {
			const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)]
			fieldArray.splice(randomIndex, 0, randomLetter)
			break
		}
		case "DELETE": {
			fieldArray.splice(randomIndex, 1)
			break
		}
	}
	return fieldArray.join("")
}
