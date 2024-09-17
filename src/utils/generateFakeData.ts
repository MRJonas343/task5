import { processNumberOfErrors, generateErrors, applyErrors } from "@/errors"
import { FakeRegister, Regions } from "@/interfaces"
import { regionFakers } from "@/constants"
import { createData, formateData } from "@/utils"

export const generateFakeData = (
	seed: number,
	region: Regions,
	numberOfErrors: number,
): FakeRegister[] => {
	const faker = regionFakers[region]

	faker.seed(seed)

	const data = createData(faker)

	const { namesFormatted, addressesFormatted } = formateData(data, region)

	const dataWithoutErrores = data.ids.map((id, index) => ({
		id,
		name: namesFormatted[index],
		address: addressesFormatted[index],
		phone: data.phones[index],
	}))

	if (!numberOfErrors) return dataWithoutErrores

	const processedNumberOfErrors = processNumberOfErrors(numberOfErrors)

	const errors = generateErrors(processedNumberOfErrors)

	const dataWithErrors = applyErrors(dataWithoutErrores, errors)

	return dataWithErrors
}
