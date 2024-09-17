import { Faker } from "@faker-js/faker"
import { Regions } from "@/interfaces/regions"
import { fakerPL as fakerPoland } from "@faker-js/faker"
import { fakerEN_US as fakerUSA } from "@faker-js/faker"
import { fakerES_MX as fakerMexico } from "@faker-js/faker"

export const regionFakers: { [key in Regions]: Faker } = {
	PL: fakerPoland,
	USA: fakerUSA,
	MX: fakerMexico,
}
