import { Data, Regions } from "@/interfaces"
import { formatters } from "@/constants/formatters"

export const formateData = (data: Data, region: Regions) => {
	if (!formatters[region]) throw new Error("Región no soportada")

	const addressesFormatted = data.street.map((_, i) =>
		formatters[region].address(data, i),
	)
	const namesFormatted = data.names.map((_, i) =>
		formatters[region].name(data, i),
	)

	return { namesFormatted, addressesFormatted }
}
