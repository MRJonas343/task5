import { Regions } from "@/interfaces"
import { generateFakeData } from "./generateFakeData"

export const resetRegisters = (
	seed: number,
	country: Regions,
	numberOfErrors: number,
) => {
	const firstRegisters = generateFakeData(seed, country, numberOfErrors)
	const secondRegisters = generateFakeData(seed + 1, country, numberOfErrors)

	return [...firstRegisters, ...secondRegisters].map((register, index) => ({
		...register,
		index: index + 1,
	}))
}
