import { Faker } from "@faker-js/faker"

export const createData = (faker: Faker) => {
	const ids = faker.helpers.uniqueArray(faker.string.uuid, 10)
	const names = faker.helpers.uniqueArray(faker.person.firstName, 10)
	const middleNames = faker.helpers.uniqueArray(faker.person.middleName, 10)
	const lastNames = faker.helpers.uniqueArray(faker.person.lastName, 10)
	const street = faker.helpers.uniqueArray(faker.location.streetAddress, 10)
	const zipCode = faker.helpers.uniqueArray(faker.location.zipCode, 10)
	const city = faker.helpers.uniqueArray(faker.location.city, 10)
	const state = faker.helpers.uniqueArray(faker.location.state, 10)

	const buildingNumber = faker.helpers.uniqueArray(
		faker.location.buildingNumber,
		10,
	)
	const phonesLocal = faker.helpers.uniqueArray(
		() => faker.phone.number({ style: "national" }),
		5,
	)
	const phonesInternational = faker.helpers.uniqueArray(
		() => faker.phone.number({ style: "international" }),
		5,
	)

	const phones = [...phonesLocal, ...phonesInternational]

	return {
		ids,
		names,
		middleNames,
		lastNames,
		phones,
		street,
		zipCode,
		city,
		state,
		buildingNumber,
	}
}
