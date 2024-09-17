import { FakeRegister, RegisterError } from "@/interfaces"
import { applyErrorToField } from "."

export const modifyField = (
	register: FakeRegister,
	error: RegisterError,
): FakeRegister => {
	const updatedRegister = { ...register }

	switch (error.field) {
		case "name":
			updatedRegister.name = applyErrorToField(register.name, error)
			break
		case "address":
			updatedRegister.address = applyErrorToField(register.address, error)
			break
		case "phone":
			updatedRegister.phone = applyErrorToField(register.phone, error)
			break
	}
	return updatedRegister
}
