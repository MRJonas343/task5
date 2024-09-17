import { FakeRegister, RegisterError } from "@/interfaces"
import { modifyField } from "@/utils/modifyField"

export const applyErrors = (
	dataWithoutErrors: FakeRegister[],
	errors: RegisterError[],
) => {
	return dataWithoutErrors.map((register) => {
		let newRegister = { ...register }
		for (const error of errors) {
			newRegister = modifyField(newRegister, error)
		}
		return newRegister
	})
}
